import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

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

export const ClinicConfigSchemaDef = {
    publicBookingEnabled:      {type: "boolean", required: false},
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
} as const;

export type CreateClinicConfigFormType = InferCreateForm<typeof ClinicConfigSchemaDef>;
export type EditClinicConfigFormType = InferEditForm<typeof ClinicConfigSchemaDef>;
