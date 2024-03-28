import { model, Schema } from 'mongoose';
import { ClientSchema } from '../interfaces/client.interface';
import AgencyModel from './agency.model';

const clientSchema = new Schema(
  {
    agencyId: {
      type: Schema.Types.ObjectId,
      ref: AgencyModel,
      required: true,
      index: true
    },
    name: {
      type: String,
      trim: true,
      required: true,
      index: true
    },
    email: {
      type: String,
      trim: true,
      required: true,
      index: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    totalBill: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

clientSchema.index(
  {
    name: 'text',
    email: 'text'
  },
  {
    name: 'client_full_text',
    default_language: 'en',
    language_override: 'en'
  }
);

const ClientModel = model<ClientSchema>('client', clientSchema);

ClientModel.on('index', error => {
  if (error) {
    throw new Error(error.message);
  }
});
ClientModel.syncIndexes();

export default ClientModel;
