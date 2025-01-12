import mongoose from 'mongoose';
import { DOCUMENT_STATUS } from './document.constant';

export interface IDocument {
  _id?: string;
  userId: mongoose.Schema.Types.ObjectId;
  fileUrl: string;
  status: keyof typeof DOCUMENT_STATUS;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UploadFile {
  path: string;
  originalname: string;
  mimetype: string;
  filename?: string;
}

export type TDocumentStatus = keyof typeof DOCUMENT_STATUS;
