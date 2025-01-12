import { Request, Response } from 'express';
import { DocumentServices } from './document.service';
import catchAsync from '../../utils/catchAsync';

const uploadDocument = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const file = req.file;
    if (!file) {
      res.status(400).json({ error: 'No file uploaded' });
      return;
    }

    const email = req.user?.email;

    const result = await DocumentServices.uploadDocument(file, email);

    res.status(201).json({
      message: 'File uploaded successfully',
      data: result,
    });
  },
);

const updateDocumentVerificationStatus = catchAsync(
  async (req: Request, res: Response) => {
    try {
      const { documentId } = req.params;
      const { status } = req.body;

      const updatedDocument =
        await DocumentServices.updateDocumentVerificationStatus(
          documentId,
          status,
        );

      res.status(200).json({
        message: 'Document status updated successfully.',
        document: updatedDocument,
      });
    } catch (error) {
      res.status(400).json({
        error: (error as Error).message,
      });
    }
  },
);

export const DocumentControllers = {
  uploadDocument,
  updateDocumentVerificationStatus,
};
