import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";
import {
    APPOINTMENT_IDEMPOTENCY_KEY,
    APPOINTMENT_NOTE_MAX,
    CLINIC_SLOTS_DAYS,
} from "../../private/appointment/appointment.constants";
import {AppointmentPatientDef, AppointmentStartDef} from "../../private/appointment/appointment.forms";

export const CLINIC_MANAGE_TOKEN_MAX = 2048;

/** Free start times for a service at a location, for one dentist or anyone who does it. */
export const ClinicSlotsFormDef = {
    service:      {type: "objectId", required: true},
    location:     {type: "objectId", required: true},
    practitioner: {type: "objectId", required: false},
    fromDate:     {type: "string", required: true, format: "localDate"},
    days:         {type: "number", required: true, ...CLINIC_SLOTS_DAYS},
} as const;
export type ClinicSlotsFormType = InferCreateForm<typeof ClinicSlotsFormDef>;

/** Online booking; without `practitioner` the clinic picks whoever is free. */
export const BookAppointmentFormDef = {
    service:        {type: "objectId", required: true},
    location:       {type: "objectId", required: true},
    practitioner:   {type: "objectId", required: false},
    ...AppointmentStartDef,
    patient:        {type: "embedded", required: true, items: AppointmentPatientDef},
    note:           {type: "string", required: false, max: APPOINTMENT_NOTE_MAX},
    acceptPrivacy:  {type: "boolean", required: true},
    idempotencyKey: {type: "string", required: true, ...APPOINTMENT_IDEMPOTENCY_KEY},
} as const;
export type BookAppointmentFormType = InferCreateForm<typeof BookAppointmentFormDef>;

/** The guest link from the confirmation email. */
export const ManageAppointmentFormDef = {
    token: {type: "string", required: true, min: 1, max: CLINIC_MANAGE_TOKEN_MAX},
} as const;
export type ManageAppointmentFormType = InferCreateForm<typeof ManageAppointmentFormDef>;

/** Moving a booking from the guest link: same dentist, new start. */
export const RescheduleManagedAppointmentFormDef = {
    ...ManageAppointmentFormDef,
    ...AppointmentStartDef,
} as const;
export type RescheduleManagedAppointmentFormType = InferCreateForm<typeof RescheduleManagedAppointmentFormDef>;
