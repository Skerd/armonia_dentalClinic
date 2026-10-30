import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";
import {
    INFO_REQUEST_KINDS,
    INQUIRY_DESCRIPTION_MAX,
    INQUIRY_REASON_MAX,
    PATIENT_LANGUAGES,
    PATIENT_SOURCES,
    TREATMENT_CATEGORIES,
} from "../../../../constants";
import {PATIENT_NAME_MAX, PATIENT_PHONE_MAX} from "../patient/patient.schema-def";

/** Who is asking. On portal requests the clinic sees only the first name and country until the patient shares the rest. */
export const InquiryContactDef = {
    firstName:         {type: "string", required: true, min: 1, max: PATIENT_NAME_MAX},
    lastName:          {type: "string", required: true, min: 1, max: PATIENT_NAME_MAX},
    email:             {type: "string", required: false, format: "email"},
    phone:             {type: "string", required: false, max: PATIENT_PHONE_MAX},
    whatsapp:          {type: "string", required: false, max: PATIENT_PHONE_MAX},
    country:           {type: "objectId", required: false},
    preferredLanguage: {type: "enum", required: true, options: PATIENT_LANGUAGES},
} as const;

/** What the patient asks about; shared by the staff form and the portal request. */
export const InquiryRequestDef = {
    treatmentsWanted: {type: "stringArray", required: true, minItems: 1, maxItems: TREATMENT_CATEGORIES.length},
    description:      {type: "string", required: false, max: INQUIRY_DESCRIPTION_MAX},
    travelFrom:       {type: "string", required: false, format: "localDate"},
    travelTo:         {type: "string", required: false, format: "localDate"},
    budget:           {type: "number", required: false, min: 0},
    budgetCurrency:   {type: "objectId", required: false},
} as const;

/** A lead the clinic enters itself: a phone call, a WhatsApp chat, an agency referral. */
export const ClinicInquirySchemaDef = {
    contact:    {type: "embedded", required: true, items: InquiryContactDef},
    source:     {type: "enum", required: true, options: PATIENT_SOURCES},
    ...InquiryRequestDef,
    assignedTo: {type: "objectId", required: false},
} as const;

export type CreateClinicInquiryFormType = InferCreateForm<typeof ClinicInquirySchemaDef>;

export const RequestInquiryInfoFormDef = {
    _id:   {type: "objectId", required: true},
    kinds: {type: "stringArray", required: true, minItems: 1, maxItems: INFO_REQUEST_KINDS.length},
    note:  {type: "string", required: false, max: INQUIRY_REASON_MAX},
} as const;
export type RequestInquiryInfoFormType = InferCreateForm<typeof RequestInquiryInfoFormDef>;

/** Declining (the clinic will not treat this) or marking lost (the patient went elsewhere). */
export const CloseInquiryFormDef = {
    _id:    {type: "objectId", required: true},
    reason: {type: "string", required: false, max: INQUIRY_REASON_MAX},
} as const;
export type CloseInquiryFormType = InferCreateForm<typeof CloseInquiryFormDef>;

export const AssignInquiryFormDef = {
    _id:        {type: "objectId", required: true},
    assignedTo: {type: "objectId", required: false},
} as const;
export type AssignInquiryFormType = InferCreateForm<typeof AssignInquiryFormDef>;
