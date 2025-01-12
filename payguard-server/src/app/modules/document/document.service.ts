import AppError from '../../errors/appError';
import { User } from '../user/user.model';
import { UploadFile } from './document.interface';
import { UploadDocument } from './document.model';
import httpStatus from 'http-status';
import { uploadDocumentToSupabase } from './document.utils';

const uploadDocument = async (file: UploadFile, email: string) => {
  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      throw new AppError('User not Found', httpStatus.NOT_FOUND);
    }

    const { publicURL } = await uploadDocumentToSupabase(file);

    if (!publicURL) {
      throw new Error('File URL could not be generated');
    }

    const document = new UploadDocument({
      userId: user._id,
      fileUrl: publicURL,
      status: 'pending',
    });

    await document.save();

    return { fileURL: publicURL, documentName: file.filename };
  } catch (err) {
    console.error('Error in uploadDocument service:', err);
    throw err;
  }
};

const updateDocumentVerificationStatus = async (
  documentId: string,
  status: string,
) => {
  const validStatuses = ['pending', 'approved', 'rejected'];

  if (!validStatuses.includes(status)) {
    throw new Error('Invalid status. Must be Pending, Approved, or Rejected.');
  }

  const updatedDocument = await UploadDocument.findByIdAndUpdate(
    documentId,
    { status },
    { new: true },
  );

  if (!updatedDocument) {
    throw new Error('Document not found.');
  }

  return updatedDocument;
};

export const DocumentServices = {
  uploadDocument,
  updateDocumentVerificationStatus,
};
