import express from 'express';
import { AuthController } from './auth.controller';
import validateRequest from '../../utils/validateRequest';
import { AuthValidation } from './auth.validation';

const router = express.Router();

router.post(
  '/register',
  validateRequest(AuthValidation.userRgisterSchema),
  AuthController.register,
);

router.post(
  '/login',
  validateRequest(AuthValidation.loginSchema),
  AuthController.login,
);

export const AuthRoutes = router;
