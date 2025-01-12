import express from 'express';
import { USER_ROLE } from '../user/user.constant';
import AuthGuard from '../../middlewares/authGuard';
import { DocumentControllers } from './document.controller';
import { upload } from './document.utils';

const router = express.Router();

router.put(
  '/upload-document',
  AuthGuard(USER_ROLE.user),
  upload.single('file'),
  DocumentControllers.uploadDocument,
);

router.put(
  '/update-verification-status/:documentId',
  AuthGuard(USER_ROLE.admin),
  DocumentControllers.updateDocumentVerificationStatus,
);

export const DocumentRoutes = router;
