import {IPQShortlistedFirms, IProcuringEntity, ProcuringEntityIdentifierInterface} from './IProcuringEntity'
import {IDocuments} from './IDocuments'
import { IClassification } from './IClassification'
import {ICriteria} from './ICriteria'

export interface IDonorsProcuringEntity extends IProcuringEntity {
  additionalIdentifiers?: Array<ProcuringEntityIdentifierInterface>,
}

export interface ItemsInterface{
  id ?: string,
  description: string,
  classification: IClassification,
  additionalClassifications?: IClassification[] | null,
  unit: {
    name: string,
    code: string
    value?: {
      amount: number,
      currency: string,
      valueAddedTaxIncluded: boolean
    },
  },
  quantity: number,
  deliveryDate: {
    startDate?: string,
    endDate: string
  },
  attributes?: {
    name: string
    values: string | number [],
    unit?: {
      code: string
      name: string
    }
  }[]
  deliveryAddress: {
    countryName: string,
    streetAddress?: string
    region?: string,
    locality?: string,
    postalCode?: string
  },
  category?: string
  profile?: string
  relatedLot?: string
  description_en?: string
  description_ru?: string

}


export interface ITender{
  date?: string,
  funders?: IDonorsProcuringEntity[]
  dateModified?: string,
  dateCreated?: string,
  tenderID?: string,
  owner?: string,
  entity_id?: string,
  title: string,
  description?: string,
  mainProcurementCategory: string, // goods
  procurementMethodType: string // priceQuotation,
  procurementMethod: string // selective,
  submissionMethod?: string// electronicAuction,
  awardCriteria?: string // lowestCost,
  status: string,
  plans?: { id: string} []
  isBidIsset?: boolean
  agreement?: {
    id: string
  },
  guarantee?: ValueInterface,
  minimalStep?: ValueInterface,
  lots?: BaseTenderLotsInterface[]
  milestones?: BaseTenderMilestonesInterface[]
  submissionMethodDetails?: string
  shortlistedFirms?: IPQShortlistedFirms[]
  value?: ValueInterface,
  tenderPeriod?: {
    startDate?: string,
    endDate: string
  },

  enquiryPeriod?: {
    startDate: string
    endDate: string
    clarificationsUntil: string
    invalidationDate: string
  },
  procurementMethodDetails?: string
  documents?: IDocuments[]
  procuringEntity: IProcuringEntity,
  noticePublicationDate ?: string,
  items: ItemsInterface[] | null,
  criteria?: ICriteria[] | null,
  next_check ?: string,
  id?: string
  complaintPeriod?: {
    startDate: string,
    endDate: string,
  },
  complaints?: Array<IComplaint>,
  bids?: IBids[]
  awardPeriod?: {
    startDate: string,
    endDate: string,
  },
  awards?: ITenderAward[]
  contracts?: IBaseTenderContracts[]
  unsuccessfulReason?: Array<string>
  cancellations?: BaseTenderCancellation[]
  mode?: string
  user?: string
  contractTemplateName?: string

}

export interface IComplaint {
  status: string
  documents: IDocuments[],
  description: string
  author: IProcuringEntity
  title: string
  value: ValueInterface,
  dateSubmitted: string
  complaintID: string
  date: string
  objections: Array<IObjection>,
  type: string
  id: string
}
export interface IObjection{
    requestedRemedies:Array<{
      type: string
      id: string
      description: string
    }>
    sequenceNumber: number,
    classification: IClassification,
    title: string
    relatesTo: string
    relatedItem: string
    arguments: Array<IArguments>,
    id: string
}

export interface IArguments {
  id: string
  description: string
  evidences: Array<{
    id: string
    relatedDocument: string
    title: string
  }>
}

export interface ITenderContract {
  id: string
  awardID: string
  contractID: string
}

export interface BaseTenderLotsInterface {
  title: string,
  description?: string,
  status: string,
  id: string,
  date: string
  value: ValueInterface,
  minimalStep: ValueInterface,
  guarantee: ValueInterface,
  auctionPeriod?: {
    startDate: string,
    endDate: string
  }
}

export interface BaseTenderMilestonesInterface{
  id: string,
  title: string
  description?: string
  type: string
  code: string
  percentage: number,
  duration: {
    days: number,
    type: string
  },
  sequenceNumber: number
  relatedLot?: string
}

export interface IBids {
  requirementResponses?: {
      requirement: {
        id: string
        title?: string
      },
      value?: string | boolean | number
      values?: Array<string | boolean | number>
      id: string
      classification?: IClassification
      unit?: {
        code: string
        name: string
      }
    }[]
  items?: Array<{
          "id": string,
          "description": string
          "unit": {
            "name": string
            "code": string
          },
          "quantity": number
        }>
  tenderers?: IProcuringEntity[]
  status: string
  id: string
  date?: string
  selfQualified?: boolean
  subcontractingDetails?: string
  lotValues?: {
      value: ValueInterface,
      relatedLot: string
      date: string
      status?: string,
    }[]
  value?: {
    amount: number
    currency: string
    valueAddedTaxIncluded: boolean
  },
  documents?: IDocuments[]
  submissionDate?: string
}

export interface ITenderAward {
  id: string
  status: string
  date: string
  value: ValueInterface,
  suppliers: IProcuringEntity[]
  bid_id?: string
  lotID?: string
  documents?: IDocuments[],
  qualified?: boolean
  eligible?: boolean
  complaintPeriod?: {
    startDate: string
    endDate: string
  },
  period?:{
     startDate?: string,
    endDate: string
  }
}

export interface ValueInterface{
  amount: number
  currency: string
  valueAddedTaxIncluded?: boolean
  amountNet?: number
}

export interface IBaseTenderContracts {
  contractNumber?: string
  id: string
  awardID: string
  contractID: string
  status: string
  value: ValueInterface,
  period?: { // added by request
    startDate: string
    endDate: string
  },
  documents?: IDocuments[]
  dateSigned?: string // added by request
  items?: ItemsInterface[],
  suppliers?: IProcuringEntity[] // Organisation,
  date: string
}

export interface BaseTenderCancellation {
  reasonType: string
  reason: string
  id: string
  date: string
  cancellationOf: string
  status: string
  documents?: IDocuments[]
}

