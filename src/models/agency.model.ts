import { model, Schema } from 'mongoose';
import { AgencySchema } from '../interfaces/agency.interface';

const agencySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      index: true
    },
    address1: {
      type: String,
      required: true
    },
    address2: {
      type: String,
      default: ''
    },
    state: {
      type: String,
      default: ''
    },
    city: {
      type: String,
      default: ''
    },
    phoneNumber: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

agencySchema.index(
  {
    name: 'text'
  },
  {
    name: 'agency_full_text',
    default_language: 'en',
    language_override: 'en'
  }
);

const AgencyModel = model<AgencySchema>('agency', agencySchema);

AgencyModel.on('index', error => {
  if (error) {
    throw new Error(error.message);
  }
});
AgencyModel.syncIndexes();

export default AgencyModel;
