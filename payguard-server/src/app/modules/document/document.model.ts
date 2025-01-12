import { Schema, model } from 'mongoose';
import { IDocument } from './document.interface';
import { DOCUMENT_STATUS } from './document.constant';

const documentSchema: Schema<IDocument> = new Schema<IDocument>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    fileUrl: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(DOCUMENT_STATUS),
      default: DOCUMENT_STATUS.pending,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const UploadDocument = model<IDocument>('Document', documentSchema);
