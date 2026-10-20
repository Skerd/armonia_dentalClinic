import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

/** `fixed` and `from` show `price`; `on_request` and `free` show none. */
export const CLINIC_SERVICE_PRICE_TYPES = ["fixed", "from", "on_request", "free"] as const;
export type ClinicServicePriceType = (typeof CLINIC_SERVICE_PRICE_TYPES)[number];

export const CLINIC_SERVICE_NAME_MAX = 128;
export const CLINIC_SERVICE_SLUG_MAX = 128;
export const CLINIC_SERVICE_DESCRIPTION_MAX = 4000;
export const CLINIC_SERVICE_DURATION_MINUTES = {min: 5, max: 480} as const;
export const CLINIC_SERVICE_BUFFER_MINUTES = {min: 0, max: 120} as const;

export const ClinicServiceSchemaDef = {
    name:                {type: "string", required: true, min: 1, max: CLINIC_SERVICE_NAME_MAX},
    slug:                {type: "string", required: true, min: 1, max: CLINIC_SERVICE_SLUG_MAX, format: "slug"},
    description:         {type: "string", required: false, max: CLINIC_SERVICE_DESCRIPTION_MAX},
    images:              {type: "mediaIdArray", required: false, publicAccess: true},
    durationMinutes:     {type: "number", required: true, ...CLINIC_SERVICE_DURATION_MINUTES},
    /** Preparation and clean-up around the treatment; the dentist is busy, the patient is not there. */
    bufferBeforeMinutes: {type: "number", required: false, ...CLINIC_SERVICE_BUFFER_MINUTES},
    bufferAfterMinutes:  {type: "number", required: false, ...CLINIC_SERVICE_BUFFER_MINUTES},
    priceType:           {type: "enum", required: true, options: CLINIC_SERVICE_PRICE_TYPES},
    price:               {type: "number", required: false, min: 0},
    onlineBookable:      {type: "boolean", required: false},
    isPublic:            {type: "boolean", required: false},
    isActive:            {type: "boolean", required: false},
    sortOrder:           {type: "number", required: false},
} as const;

export type CreateClinicServiceFormType = InferCreateForm<typeof ClinicServiceSchemaDef>;
export type EditClinicServiceFormType = InferEditForm<typeof ClinicServiceSchemaDef>;
