/**
 * pending   — booked online, waiting for the clinic to confirm (only when the clinic asks for that)
 * confirmed — booked
 * completed / cancelled / no_show — closed
 * A reschedule is a timeline event, not a status.
 */
export const APPOINTMENT_STATUSES = ["pending", "confirmed", "completed", "cancelled", "no_show"] as const;
export type AppointmentStatus = (typeof APPOINTMENT_STATUSES)[number];

/** Statuses whose window keeps the dentist busy. */
export const APPOINTMENT_BLOCKING_STATUSES: readonly AppointmentStatus[] = ["pending", "confirmed"];

export const APPOINTMENT_SOURCES = ["online", "staff"] as const;
export const APPOINTMENT_CANCELLED_BY = ["patient", "staff"] as const;

export const APPOINTMENT_TIMELINE_EVENTS = ["created", "confirmed", "rescheduled", "cancelled", "completed", "no_show", "anonymized"] as const;
export type AppointmentTimelineEvent = (typeof APPOINTMENT_TIMELINE_EVENTS)[number];

/** `purpose` of the guest "manage your appointment" link. */
export const APPOINTMENT_LINK_PURPOSE = "appointment";

export const APPOINTMENT_PATIENT_NAME_MAX = 64;
export const APPOINTMENT_PATIENT_PHONE_MAX = 32;
/** Kept short: the note is for practical remarks, not medical history. */
export const APPOINTMENT_NOTE_MAX = 500;
export const APPOINTMENT_REASON_MAX = 500;
export const APPOINTMENT_IDEMPOTENCY_KEY = {min: 8, max: 64} as const;
/** How many days one availability request may cover. */
export const CLINIC_SLOTS_DAYS = {min: 1, max: 14} as const;
