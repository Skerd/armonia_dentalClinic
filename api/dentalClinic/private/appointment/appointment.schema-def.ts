import {APPOINTMENT_IDEMPOTENCY_KEY, APPOINTMENT_NOTE_MAX} from "./appointment.constants";
import {AppointmentPatientDef} from "./appointment.forms";

/**
 * The stored appointment's fields that a booking request sets as given (TD-B12). The rest (number, status,
 * times, snapshot, policy, timeline) is server-owned. `validateSchemaDefAgainstMongoose` keeps this aligned
 * with the Mongoose schema.
 */
export const AppointmentSchemaDef = {
    service:        {type: "objectId", required: true},
    location:       {type: "objectId", required: true},
    practitioner:   {type: "objectId", required: true},
    patient:        {type: "embedded", required: true, items: AppointmentPatientDef},
    patientRecord:  {type: "objectId", required: false},
    customer:       {type: "objectId", required: false},
    note:           {type: "string", required: false, max: APPOINTMENT_NOTE_MAX},
    idempotencyKey: {type: "string", required: true, ...APPOINTMENT_IDEMPOTENCY_KEY},
} as const;
