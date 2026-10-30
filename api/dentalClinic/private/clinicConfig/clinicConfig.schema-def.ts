import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {PATIENT_LANGUAGES} from "../../../../constants";

export const CLINIC_SLOT_INTERVAL_MINUTES = {min: 5, max: 120} as const;
export const CLINIC_NOTICE_HOURS = {min: 0, max: 720} as const;
export const CLINIC_ADVANCE_DAYS = {min: 1, max: 365} as const;
export const CLINIC_DEADLINE_HOURS = {min: 0, max: 720} as const;
export const CLINIC_NO_SHOW_GRACE_MINUTES = {min: 0, max: 240} as const;
/** 0 turns reminders off. */
export const CLINIC_REMINDER_HOURS = {min: 0, max: 168} as const;
export const CLINIC_RETENTION_MONTHS = {min: 6, max: 240} as const;
export const CLINIC_PRIVACY_VERSION_MAX = 32;
export const CLINIC_PRIVACY_TEXT_MAX = 20000;
export const CLINIC_RESPONSE_TARGET_HOURS = {min: 1, max: 168} as const;
export const CLINIC_PROFILE_LIST_MAX_ITEMS = 10;
export const CLINIC_PROFILE_LIST_ITEM_MAX = 64;
export const CLINIC_PROFILE_HEADLINE_MAX = 160;
export const CLINIC_PROFILE_TEXT_MAX = 4000;
export const CLINIC_ACCREDITATION_TEXT_MAX = 128;
export const CLINIC_ACCREDITATIONS_MAX_ITEMS = 20;
export const CLINIC_GALLERY_MAX_ITEMS = 12;
export const CLINIC_QUOTE_VALIDITY_DAYS = {min: 1, max: 365} as const;

/** The clinic's story in one language; the portal shows the visitor's language, else the first row. */
export const ClinicProfileTextDef = {
    locale:         {type: "enum", required: true, options: PATIENT_LANGUAGES},
    headline:       {type: "string", required: false, max: CLINIC_PROFILE_HEADLINE_MAX},
    description:    {type: "string", required: false, max: CLINIC_PROFILE_TEXT_MAX},
    warrantyPolicy: {type: "string", required: false, max: CLINIC_PROFILE_TEXT_MAX},
    travelInfo:     {type: "string", required: false, max: CLINIC_PROFILE_TEXT_MAX},
} as const;

export const ClinicAccreditationDef = {
    title:  {type: "string", required: true, min: 1, max: CLINIC_ACCREDITATION_TEXT_MAX},
    issuer: {type: "string", required: false, max: CLINIC_ACCREDITATION_TEXT_MAX},
    year:   {type: "number", required: false, min: 1900, max: 2100},
} as const;

export const ClinicConfigSchemaDef = {
    publicBookingEnabled:      {type: "boolean", required: false},
    listedOnPortal:            {type: "boolean", required: false},
    currency:                  {type: "objectId", required: true},
    slotIntervalMinutes:       {type: "number", required: true, ...CLINIC_SLOT_INTERVAL_MINUTES},
    minNoticeHours:            {type: "number", required: true, ...CLINIC_NOTICE_HOURS},
    maxAdvanceDays:            {type: "number", required: true, ...CLINIC_ADVANCE_DAYS},
    cancellationDeadlineHours: {type: "number", required: true, ...CLINIC_DEADLINE_HOURS},
    rescheduleDeadlineHours:   {type: "number", required: true, ...CLINIC_DEADLINE_HOURS},
    noShowGraceMinutes:        {type: "number", required: true, ...CLINIC_NO_SHOW_GRACE_MINUTES},
    guestBookingAllowed:       {type: "boolean", required: false},
    requireStaffConfirmation:  {type: "boolean", required: false},
    /** A short free-text note from the patient; off by default because it invites health details. */
    patientNoteEnabled:        {type: "boolean", required: false},
    reminderHoursBefore:       {type: "number", required: true, ...CLINIC_REMINDER_HOURS},
    reminderSms:               {type: "boolean", required: false},
    /** Whether emails and texts name the treatment; off by default since it can reveal a condition. */
    includeServiceInMessages:  {type: "boolean", required: false},
    /** Months after an appointment ends before the patient's details are removed from it. */
    retentionMonths:           {type: "number", required: true, ...CLINIC_RETENTION_MONTHS},
    privacyNoticeVersion:      {type: "string", required: false, max: CLINIC_PRIVACY_VERSION_MAX},
    privacyNoticeText:         {type: "string", required: false, max: CLINIC_PRIVACY_TEXT_MAX},
    notifyUsers:               {type: "objectIdArray", required: false},
    /** Patients may send estimate requests (from the portal and the clinic's own site). */
    inquiriesEnabled:          {type: "boolean", required: false},
    /** Staff told about new requests and patient messages, besides the assignee. */
    inquiryNotifyUsers:        {type: "objectIdArray", required: false},
    /** Unanswered requests older than this are flagged to the staff above. */
    responseTargetHours:       {type: "number", required: true, ...CLINIC_RESPONSE_TARGET_HOURS},
    languagesSpoken:           {type: "stringArray", required: false, maxItems: CLINIC_PROFILE_LIST_MAX_ITEMS, itemMax: CLINIC_PROFILE_LIST_ITEM_MAX},
    implantBrands:             {type: "stringArray", required: false, maxItems: CLINIC_PROFILE_LIST_MAX_ITEMS, itemMax: CLINIC_PROFILE_LIST_ITEM_MAX},
    nearestAirport:            {type: "string", required: false, max: CLINIC_PROFILE_LIST_ITEM_MAX},
    profileTexts:              {type: "embeddedArray", required: false, items: ClinicProfileTextDef, maxItems: PATIENT_LANGUAGES.length},
    accreditations:            {type: "embeddedArray", required: false, items: ClinicAccreditationDef, maxItems: CLINIC_ACCREDITATIONS_MAX_ITEMS},
    gallery:                   {type: "mediaIdArray", required: false, publicAccess: true},
    /** How long a sent quote can be accepted, unless the quote sets its own date. */
    quoteValidityDays:         {type: "number", required: true, ...CLINIC_QUOTE_VALIDITY_DAYS},
    /** Standard terms copied into every new quote (payment, cancellation, what is included). */
    quoteTerms:                {type: "string", required: false, max: CLINIC_PROFILE_TEXT_MAX},
} as const;

export type CreateClinicConfigFormType = InferCreateForm<typeof ClinicConfigSchemaDef>;
export type EditClinicConfigFormType = InferEditForm<typeof ClinicConfigSchemaDef>;
