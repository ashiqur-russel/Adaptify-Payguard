import { PAYMENT_STATUS } from './payment.constant';

export interface IPayment {
  id: string;
  title: string;
  amount: number;
  status: keyof typeof PAYMENT_STATUS;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}
