import { ObjectId } from 'mongoose';

export interface AgencySchema {
  _id: ObjectId | string;
  name: string;
  address1: string;
  address2: string;
  state: string;
  city: string;
  phoneNumber: string;
}

export interface CreateAgencyDto {
  name: string;
  address1: string;
  address2: string;
  state: string;
  city: string;
  phoneNumber: string;
}
