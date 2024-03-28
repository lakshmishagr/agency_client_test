import { AgencyModel } from '../models/_all.models';
import { AgencySchema, CreateAgencyDto } from '../interfaces/agency.interface';
import { isEmpty } from '../utils/util';
import ApiError from '../core/ApiError';

export async function findAllAgency(): Promise<AgencySchema[]> {
  return AgencyModel.find().lean().exec();
}

export async function findAgencyById(agencyId: string): Promise<AgencySchema> {
  if (isEmpty(agencyId)) {
    throw new ApiError(400, 'AgencyId is empty', new Error());
  }

  const findAgency: AgencySchema | null | any = await AgencyModel.findOne({
    _id: agencyId
  })
    .lean()
    .exec();
  if (!findAgency) {
    throw new ApiError(409, "Agency doesn't exist", new Error());
  }

  return findAgency;
}

export async function createAgency(
  agencyData: CreateAgencyDto
): Promise<AgencySchema> {
  const createAgencyData: AgencySchema = await new AgencyModel({
    ...agencyData
  }).save();

  return createAgencyData;
}

export async function updateAgency(
  agencyId: string,
  agencyData: CreateAgencyDto
): Promise<AgencySchema> {
  const updateAgencyById: AgencySchema | null =
    await AgencyModel.findByIdAndUpdate(
      agencyId,
      {
        ...agencyData
      },
      { new: true }
    )
      .lean()
      .exec();
  if (!updateAgencyById) {
    throw new ApiError(409, "Agency doesn't exist", new Error());
  }

  return updateAgencyById;
}

export async function deleteAgency(agencyId: string): Promise<AgencySchema> {
  const deleteAgencyById: AgencySchema | null =
    await AgencyModel.findByIdAndDelete(agencyId).lean().exec();
  if (!deleteAgencyById) {
    throw new ApiError(409, "Agency doesn't exist", new Error());
  }

  return deleteAgencyById;
}
