export interface IProcuringEntity {
  kind?: string
  scale?: string
  name?: string
  name_uk?: string
  name_en?: string
  name_ru?: string
  address: ProcuringEntityAddressInterface,
  contactPoint?: ProcuringEntityContactPointInterface,
  identifier: ProcuringEntityIdentifierInterface,
  signerInfo?: IProcuringEntitySignerInfo
  id?: string
}

export interface IProcuringEntitySignerInfo {
  name: string
  email: string
  telephone: string
  iban: string
  authorizedBy?: string
  basisOf?: string
  position: string
}

export interface ProcuringEntityIdentifierInterface{
  scheme: string,
  id: string,
  legalName?: string
  legalName_en?: string
  legalName_ru?: string
  uri?: string

}

export interface ProcuringEntityAddressInterface{
  countryName?: string,
  postalCode?: string,
  region?: string,
  streetAddress?: string,
  locality?: string
}

export interface ProcuringEntityContactPointInterface{
  url?: string,
  faxNumber?: string,
  telephone: string,
  name?: string,
  name_en?: string,
  name_ru?: string
  email: string
}
export interface IDonorsProcuringEntity extends IProcuringEntity{
  additionalIdentifiers: [],
}

export interface ProcuringEntityShortInterface extends Omit<IProcuringEntity, 'contactPoint'>{
  id?: string
}
export interface IPQShortlistedFirms extends IProcuringEntity{
  id?: string,
  status?: string
}

export interface IBuyersProcuringEntity extends IProcuringEntity{
  id: string
  tendersCount: number
}
