import mongoose from 'mongoose';
import { PAYMENT_STATUS } from './payment.constant';

export interface IPayment {
  _id?: string;
  title: string;
  amount: number;
  status: keyof typeof PAYMENT_STATUS;
  userId: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
