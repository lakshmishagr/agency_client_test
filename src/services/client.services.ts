import { ClientModel } from '../models/_all.models';
import {
  ClientSchema,
  CreateClientDto,
  CreateAgencyClientDto
} from '../interfaces/client.interface';
import { isEmpty } from '../utils/util';
import ApiError from '../core/ApiError';
import * as agencyService from '../services/agency.services';

export async function findAllClient(): Promise<ClientSchema[]> {
  return ClientModel.find().lean().exec();
}

export async function findClientById(clientId: string): Promise<ClientSchema> {
  if (isEmpty(clientId)) {
    throw new ApiError(400, 'ClientId is empty', new Error());
  }

  const findClient: ClientSchema | null | any = await ClientModel.findOne({
    _id: clientId
  })
    .lean()
    .exec();
  if (!findClient) {
    throw new ApiError(409, "Client doesn't exist", new Error());
  }

  return findClient;
}

export async function createClient(
  clientData: CreateClientDto
): Promise<ClientSchema> {
  const createClientData: ClientSchema = await new ClientModel({
    ...clientData
  }).save();

  return createClientData;
}

export async function updateClient(
  clientId: string,
  clientData: CreateClientDto
): Promise<ClientSchema> {
  const updateClientById: ClientSchema | null =
    await ClientModel.findByIdAndUpdate(
      clientId,
      {
        ...clientData
      },
      { new: true }
    )
      .lean()
      .exec();
  if (!updateClientById) {
    throw new ApiError(409, "Client doesn't exist", new Error());
  }

  return updateClientById;
}

export async function deleteClient(clientId: string): Promise<ClientSchema> {
  const deleteClientById: ClientSchema | null =
    await ClientModel.findByIdAndDelete(clientId).lean().exec();
  if (!deleteClientById) {
    throw new ApiError(409, "Client doesn't exist", new Error());
  }

  return deleteClientById;
}

export async function getHightBillClient(): Promise<ClientSchema> {
  const data: ClientSchema | null | any = await ClientModel.findOne(
    {},
    { clientName: '$name', totalBill: 1 }
  )
    .sort({ totalBill: -1 })
    .populate('agencyId', { name: 1 })
    .lean()
    .exec();

  if (!data) {
    throw new ApiError(409, 'No Client Records', new Error());
  }

  return data;
}

export async function createAgencyClient(
  bodyData: CreateAgencyClientDto
): Promise<any> {
  const agencyData = await agencyService.createAgency(bodyData.agency);

  const clientsData = await Promise.allSettled(
    bodyData.clients.map(dd => {
      return createClient({ ...dd, agencyId: agencyData._id.toString() });
    })
  );

  return { agencyData, clientsData };
}
