import { DOCUMENT_STATUS } from './document.constant';

export interface IDocument {
  id: string;
  userId: string;
  fileUrl: string;
  status: keyof typeof DOCUMENT_STATUS;
  uploadedAt: Date;
}
