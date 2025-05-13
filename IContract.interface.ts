import {ItemsInterface} from './tenders.models'
import {IProcuringEntity} from './IProcuringEntity'
import {IDocuments} from './IDocuments'

export interface IContract{
  awardID: string
  contractID: string
  contractNumber?: string
  title?: string
  contractTemplateName?: string
  description?: string
  period?: {
    startDate: string
    endDate: string
  },
  entity_id?: string
  dateSigned?: string
  dateModified: string
  dateCreated: string
  items: ItemsInterface[]
  tender_id: string
  owner: string
  status: string
  suppliers?: IProcuringEntity[]
  buyer?: IProcuringEntity
  procuringEntity?: IProcuringEntity
  changes?: ContractChangesInterface[]
  documents?: IDocuments[]
  bid_owner: string
  amountPaid?: {
    amount: number
    currency: string
    amountNet: number
    valueAddedTaxIncluded: boolean
  },
  value: {
    amount: number
    currency: string
    valueAddedTaxIncluded: boolean
    amountNet: number
  },
  terminationDetails?: string
  id: string
  user?: string
}

export interface ContractChangesInterface{
  id: string
  status: string
  date: string
  rationale: string
  rationaleTypes: string[]
  contractNumber?: string
  dateSigned: string
}
