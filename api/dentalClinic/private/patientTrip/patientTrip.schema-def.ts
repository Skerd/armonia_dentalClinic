import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {PATIENT_TRIP_STATUSES} from "../../../../constants";

export const PATIENT_TRIP_FLIGHT_MAX = 40;
export const PATIENT_TRIP_ACCOMMODATION_MAX = 300;
export const PATIENT_TRIP_NOTES_MAX = 1000;
export const PATIENT_TRIP_COMPANIONS = {min: 0, max: 10} as const;
export const PATIENT_TRIP_PHASE = {min: 1, max: 6} as const;

/**
 * One stay of a patient for treatment: usually one per phase of their accepted plan (implants,
 * then crowns after healing). Flights and the hotel may be filled in by the patient on the portal.
 */
export const PatientTripSchemaDef = {
    patient:         {type: "objectId", required: true},
    /** The accepted plan and its phase this trip is for; a later phase starts after the plan's healing gap. */
    plan:            {type: "objectId", required: false},
    phase:           {type: "number", required: false, ...PATIENT_TRIP_PHASE},
    status:          {type: "enum", required: true, options: PATIENT_TRIP_STATUSES},
    arrivalAt:       {type: "date", required: true},
    departureAt:     {type: "date", required: true, afterField: "arrivalAt"},
    arrivalFlight:   {type: "string", required: false, max: PATIENT_TRIP_FLIGHT_MAX},
    departureFlight: {type: "string", required: false, max: PATIENT_TRIP_FLIGHT_MAX},
    accommodation:   {type: "string", required: false, max: PATIENT_TRIP_ACCOMMODATION_MAX},
    /** The clinic picks the patient up at the airport. */
    transfer:        {type: "boolean", required: false},
    companions:      {type: "number", required: false, ...PATIENT_TRIP_COMPANIONS},
    notes:           {type: "string", required: false, max: PATIENT_TRIP_NOTES_MAX},
} as const;

export type CreatePatientTripFormType = InferCreateForm<typeof PatientTripSchemaDef>;
export type EditPatientTripFormType = InferEditForm<typeof PatientTripSchemaDef>;
