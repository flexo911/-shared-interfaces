import { BaseTender } from './tenders.models'
import {IBuyersProcuringEntity, IProcuringEntity} from './IProcuringEntity'
import { BaseContract } from './IContract.interface'

export interface TendersListResponse {
  tenders: Array<BaseTender>,
  limit: number
  page: number
  total: number
  totalPages: number
}

export interface ContractListResponse {
  contracts: Array<BaseContract>,
  limit: number
  page: number
  total: number
  totalPages: number
}

export interface BuyerSingleResponse {
  procuringEntity: IProcuringEntity
  statistics: IBuyerStatistics
}

export interface IBuyerStatistics {
  tendersCount: number
  totalAmount: number
  successfulTenders: number
  activeTenders: number
  cancelledTenders: number
  tendersByMonth: Array<{
    date: string
    amount: number
    status: string
  }>
  monthlyStatistics: Array<{
    month: string
    count: number
    amount: number
    successful: number
    active: number
    cancelled: number
  }>
}

export interface IBuyerTendersResponse {
  statistics: {
    activeCount: number
    averageAmount: number
    cancelledCount: number
    successfulCount: number
    totalAmount: number
  }
  tenders: Array<BaseTender>
  limit: number
  page: number
  total: number
  totalPages: number
}


export interface IBuyersHonestyRequest {
  customerId: string
  totalTenders: number
  reportingTenders: number
  tenderTypesDistribution: {[key: string]: number }
  totalValue: number
  totalContractValue: number
  avgBidsPerTender: number
  bidWinnerFairnessScore: number
  cancelledTenders: number
  complaintsCount: number
  localityRate: number
  lowestDate: string,
}

export interface IBuyersHonesty  extends IBuyersHonestyRequest {
  customerId: string
  totalTenders: number
  reportingTenders: number
  tenderTypesDistribution: {[key: string]: number }
  totalValue: number
  totalContractValue: number
  avgBidsPerTender: number
  bidWinnerFairnessScore: number
  cancelledTenders: number
  complaintsCount: number
  localityRate: number
  honestlyRate: IBuyersHonestlyRate
}

export interface IBuyersHonestlyRate {
        "honestyScore":number,
        "mse": number,
        "status": string,
        "details": {
            "base_score": number,
            "fairness_bonus": number,
            "bids_penalty": number,
            "avg_bids_per_tender": number,
            "bid_winner_fairness": number
        }
}

export interface IListResponse {
  tenders: Array<BaseTender>,
  limit: number
  page: number
  total: number
  totalPages: number
}

export interface IBuyerResponse {
  buyers: Array<IBuyersProcuringEntity>,
  limit: number
  page: number
  total: number
  totalPages: number
}


export interface ISuppliersResponse {
  suppliers: Array<IProcuringEntity>,
  limit: number
  page: number
  total: number
  totalPages: number
}


export interface ISupplierResponse {
  supplier: Array<IProcuringEntity>,
  limit: number
  page: number
  total: number
  totalPages: number
}


export interface ISupplierContractResponse {
  statistics: {
    activeCount: number
    averageAmount: number
    cancelledCount: number
    successfulCount: number
    totalAmount: number
  }
  contracts: Array<BaseContract>
  limit: number
  page: number
  total: number
  totalPages: number
}

export interface SupplierData {
  supplier: IProcuringEntity;
  statistics: ISupplierStatistics
}

export interface ISupplierStatistics {
    totalContracts: number,
    totalAmount: number,
    statusBreakdown: {
      [key: string]: {
        count: number
        amount: number
      }
    },
    monthlyStatistics: [
        {
            month: string,
            count: number
            "amount": number
            "active": number
            "completed": number
            "terminated": number
        }
    ]
}

export interface IMapResponse {
  region: string,
  totalAmount: number
  countTenders: number
  lowestDate: string
  coordinates: Array< number >
  categories: Array<{
    "category": string
        "code": string
        "totalAmount": number
        "countTenders": number
  }>
}

export interface IMapDBResult extends IMapResponse{
  _id: string
}

