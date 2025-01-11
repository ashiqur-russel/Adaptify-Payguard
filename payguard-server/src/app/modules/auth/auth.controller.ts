import { AuthServices } from './auth.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const register = catchAsync(async (req, res) => {
  const { email, password, role } = req.body;
  await AuthServices.registerUser(email, password, role);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Registered succesfully!',
    data: {},
  });
});

const login = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);
  const { email, _id } = result;

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is logged in succesfully!',
    data: {
      email: email,
      id: _id,
    },
  });
});

export const AuthController = {
  register,
  login,
};
