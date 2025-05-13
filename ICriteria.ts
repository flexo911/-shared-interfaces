export interface ICriteria {
  id?: string,
  title: string,
  description?: string,
  requirementGroups: ICriteriaRequirementGroups[]
  relatesTo?: string,
  relatedItem?: string
  source?: string
  classification?: {
    scheme: string
    id: string
  }
  legislation?: ICriteriaLegislation[]
}


export interface ICriteriaRequirementGroups {
  id?: string,
  description: string,
  requirements: ICriteriaRequirements[]
}

export interface ICriteriaRequirements {
  id?: string,
  title: string,
  description?: string
  period?: string
  pattern?: string
  dataType: string,
  expectedValue?: string | number | boolean
  expectedValues?: string[] | []
  expectedMinItems?: number,
  expectedMaxItems?: number,
  minValue?: number
  relatedDocument?: {
    id: string
    title: string
  }
  maxValue?: number
  status?: string
  datePublished?: string
  dateModified?: string
  unit?: {
    code: string,
    name: string
  }
  rules?: {
    canEdit: boolean
    canDelete: boolean
  }
  origins?: ICriteriaRequirements
  isArchived?: boolean
  eligibleEvidences?: ICriteriaRequirementsEligibleEvidences[]
}
export interface ICriteriaLegislation {
  version: string,
  identifier: {
    id: string
    legalName: string
    uri: string
  },
  type: string
  article?: string
}

export interface ICriteriaRequirementsEligibleEvidences {
  title?: string
  description: string
  type: string
  relatedDocument?: {
    id: string
    title: string
  },
  id?: string
}
