import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";
import {
    APPOINTMENT_IDEMPOTENCY_KEY,
    APPOINTMENT_NOTE_MAX,
    APPOINTMENT_PATIENT_NAME_MAX,
    APPOINTMENT_PATIENT_PHONE_MAX,
    APPOINTMENT_REASON_MAX,
} from "./appointment.constants";

/**
 * Input shapes for appointments. An appointment is never edited as a form: it is
 * created from these commands and then changes only through actions.
 */

export const AppointmentPatientDef = {
    firstName: {type: "string", required: true, min: 1, max: APPOINTMENT_PATIENT_NAME_MAX},
    lastName:  {type: "string", required: true, min: 1, max: APPOINTMENT_PATIENT_NAME_MAX},
    email:     {type: "string", required: true, format: "email"},
    phone:     {type: "string", required: true, min: 1, max: APPOINTMENT_PATIENT_PHONE_MAX},
} as const;

/** A start as local wall-clock date and time at the appointment's location. */
export const AppointmentStartDef = {
    date: {type: "string", required: true, format: "localDate"},
    time: {type: "string", required: true, format: "timeOfDay"},
} as const;

/** Staff booking from the panel (phone, front desk). */
export const CreateAppointmentFormDef = {
    service:        {type: "objectId", required: true},
    location:       {type: "objectId", required: true},
    practitioner:   {type: "objectId", required: true},
    ...AppointmentStartDef,
    patient:        {type: "embedded", required: true, items: AppointmentPatientDef},
    customer:       {type: "objectId", required: false},
    note:           {type: "string", required: false, max: APPOINTMENT_NOTE_MAX},
    idempotencyKey: {type: "string", required: true, ...APPOINTMENT_IDEMPOTENCY_KEY},
} as const;
export type CreateAppointmentFormType = InferCreateForm<typeof CreateAppointmentFormDef>;

export const CancelAppointmentFormDef = {
    _id:    {type: "objectId", required: true},
    reason: {type: "string", required: false, max: APPOINTMENT_REASON_MAX},
} as const;
export type CancelAppointmentFormType = InferCreateForm<typeof CancelAppointmentFormDef>;

/** Staff may also move the appointment to another dentist who does the service there. */
export const RescheduleAppointmentFormDef = {
    _id:          {type: "objectId", required: true},
    ...AppointmentStartDef,
    practitioner: {type: "objectId", required: false},
} as const;
export type RescheduleAppointmentFormType = InferCreateForm<typeof RescheduleAppointmentFormDef>;

/** One location's day for the panel's day view. */
export const ClinicDayFormDef = {
    location: {type: "objectId", required: true},
    date:     {type: "string", required: true, format: "localDate"},
} as const;
export type ClinicDayFormType = InferCreateForm<typeof ClinicDayFormDef>;
