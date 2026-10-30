import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";
import {CLINIC_MESSAGE_ATTACHMENTS_MAX, CLINIC_MESSAGE_BODY_MAX, INFO_REQUEST_KINDS, INQUIRY_FILES_MAX, INQUIRY_MAX_CLINICS} from "../../../../constants";
import {APPOINTMENT_IDEMPOTENCY_KEY} from "../../private/appointment/appointment.constants";
import {InquiryContactDef, InquiryRequestDef} from "../../private/clinicInquiry/clinicInquiry.schema-def";

/** The version of the platform's consent text for sharing health details with clinics. */
export const PATIENT_REQUEST_CONSENT_VERSION_MAX = 32;
export const REQUEST_GROUP_MAX = 64;

/** One estimate request to one or more clinics (by id). Files are uploaded first, then named here. */
export const CreatePatientRequestFormDef = {
    clinics:        {type: "objectIdArray", required: true, minItems: 1, maxItems: INQUIRY_MAX_CLINICS},
    contact:        {type: "embedded", required: true, items: InquiryContactDef},
    ...InquiryRequestDef,
    files:          {type: "objectIdArray", required: false, maxItems: INQUIRY_FILES_MAX},
    /** Explicit consent to share the request, and any health details in it, with the chosen clinics. */
    acceptConsent:  {type: "boolean", required: true},
    consentVersion: {type: "string", required: true, min: 1, max: PATIENT_REQUEST_CONSENT_VERSION_MAX},
    idempotencyKey: {type: "string", required: true, ...APPOINTMENT_IDEMPOTENCY_KEY},
} as const;
export type CreatePatientRequestFormType = InferCreateForm<typeof CreatePatientRequestFormDef>;

/** All of one request: its inquiry at each clinic. */
export const PatientCaseFormDef = {
    requestGroup: {type: "string", required: true, min: 1, max: REQUEST_GROUP_MAX},
} as const;
export type PatientCaseFormType = InferCreateForm<typeof PatientCaseFormDef>;

/** One inquiry of the signed-in patient. */
export const PatientInquiryFormDef = {
    inquiry: {type: "objectId", required: true},
} as const;
export type PatientInquiryFormType = InferCreateForm<typeof PatientInquiryFormDef>;

export const PatientMessageFormDef = {
    inquiry:     {type: "objectId", required: true},
    body:        {type: "string", required: true, min: 1, max: CLINIC_MESSAGE_BODY_MAX},
    attachments: {type: "objectIdArray", required: false, maxItems: CLINIC_MESSAGE_ATTACHMENTS_MAX},
} as const;
export type PatientMessageFormType = InferCreateForm<typeof PatientMessageFormDef>;

/** Files added later, optionally answering what the clinic asked for. */
export const PatientAttachFilesFormDef = {
    inquiry: {type: "objectId", required: true},
    files:   {type: "objectIdArray", required: true, minItems: 1, maxItems: INQUIRY_FILES_MAX},
    fulfils: {type: "stringArray", required: false, maxItems: INFO_REQUEST_KINDS.length},
} as const;
export type PatientAttachFilesFormType = InferCreateForm<typeof PatientAttachFilesFormDef>;

export const PATIENT_SIGNED_NAME_MAX = 128;

/**
 * Accepting one clinic's quote: the patient types their full name as a signature. Their other
 * clinics are told the patient went elsewhere, and this clinic gets their contact details.
 */
export const AcceptTreatmentPlanFormDef = {
    plan:        {type: "objectId", required: true},
    signedName:  {type: "string", required: true, min: 3, max: PATIENT_SIGNED_NAME_MAX},
    acceptTerms: {type: "boolean", required: true},
} as const;
export type AcceptTreatmentPlanFormType = InferCreateForm<typeof AcceptTreatmentPlanFormDef>;
