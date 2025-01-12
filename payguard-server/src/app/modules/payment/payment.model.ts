import { PAYMENT_STATUS } from './payment.constant';
import { IPayment } from './payment.interface';
import { Schema, model } from 'mongoose';

const paymentSchema: Schema<IPayment> = new Schema<IPayment>(
  {
    title: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(PAYMENT_STATUS),
      default: PAYMENT_STATUS.pending,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);
export const Payment = model<IPayment>('Payment', paymentSchema);
