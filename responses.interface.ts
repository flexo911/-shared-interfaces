import {ITender} from './tenders.models'
import {IProcuringEntity} from './IProcuringEntity'
import {IContract} from './IContract.interface'

export interface TendersListResponse {
  tenders: Array<ITender>,
  limit: number
  page: number
  total: number
  totalPages: number
}

export interface ContractListResponse {
  contracts: Array<IContract>,
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
  tenders: Array<ITender>
  limit: number
  page: number
  total: number
  totalPages: number
}


export interface IListResponse {
  tenders: Array<ITender>,
  limit: number
  page: number
  total: number
  totalPages: number
}

export interface IBuyerResponse {
  buyers: Array<IProcuringEntity>,
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
  contracts: Array<IContract>
  limit: number
  page: number
  total: number
  totalPages: number
}

export interface SupplierData {
  supplier: IProcuringEntity;
  statistics: {
    totalContracts: number;
    totalAmount: number;
    statusBreakdown: {
      [key: string]: {
        count: number;
        amount: number;
      };
    };
    monthlyStatistics: Array<{
      month: string;
      count: number;
      amount: number;
      active: number;
      completed: number;
      terminated: number;
    }>;
  };
}
