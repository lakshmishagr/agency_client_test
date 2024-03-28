import { ObjectId } from 'mongoose';

export interface ClientSchema {
  _id: ObjectId | string;
  agencyId: string;
  name: string;
  email: string;
  phoneNumber: string;
  totalBill: string;
}

export interface CreateClientDto {
  agencyId: string;
  name: string;
  email: string;
  phoneNumber: string;
  totalBill: string;
}

export interface CreateAgencyClientDto {
  agency: {
    name: string;
    address1: string;
    address2: string;
    state: string;
    city: string;
    phoneNumber: string;
  };
  clients: [
    {
      agencyId: string;
      name: string;
      email: string;
      phoneNumber: string;
      totalBill: string;
    }
  ];
}
