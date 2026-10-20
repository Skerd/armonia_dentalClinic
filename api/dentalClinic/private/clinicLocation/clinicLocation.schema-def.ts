import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {WeeklyHoursSlotDef} from "../../../../../core/helpers/weeklyHours.schema-def";

export const CLINIC_LOCATION_NAME_MAX = 128;
export const CLINIC_LOCATION_PHONE_MAX = 32;
export const CLINIC_LOCATION_STREET_MAX = 256;
export const CLINIC_LOCATION_POSTAL_CODE_MAX = 32;
export const CLINIC_LOCATION_TIMEZONE_MAX = 64;
export const CLINIC_LOCATION_CLOSURE_REASON_MAX = 128;
export const CLINIC_LOCATION_HOURS_MAX_ITEMS = 21;
export const CLINIC_LOCATION_CLOSURES_MAX_ITEMS = 120;

const ClinicLocationAddressDef = {
    country:    {type: "objectId", required: false},
    city:       {type: "objectId", required: false},
    street:     {type: "string", required: false, max: CLINIC_LOCATION_STREET_MAX},
    postalCode: {type: "string", required: false, max: CLINIC_LOCATION_POSTAL_CODE_MAX},
    latitude:   {type: "number", required: false, min: -90, max: 90},
    longitude:  {type: "number", required: false, min: -180, max: 180},
} as const;

/** A whole local day the clinic is closed (public holiday). */
const ClinicLocationClosureDef = {
    date:   {type: "string", required: true, format: "localDate"},
    reason: {type: "string", required: false, max: CLINIC_LOCATION_CLOSURE_REASON_MAX},
} as const;

export const ClinicLocationSchemaDef = {
    name:         {type: "string", required: true, min: 1, max: CLINIC_LOCATION_NAME_MAX},
    phone:        {type: "string", required: false, max: CLINIC_LOCATION_PHONE_MAX},
    email:        {type: "string", required: false, format: "email"},
    address:      {type: "embedded", required: false, items: ClinicLocationAddressDef},
    /** IANA zone the opening hours, dentists' schedules and every appointment here are expressed in. */
    timezone:     {type: "string", required: true, min: 1, max: CLINIC_LOCATION_TIMEZONE_MAX},
    openingHours: {type: "embeddedArray", required: false, items: WeeklyHoursSlotDef, maxItems: CLINIC_LOCATION_HOURS_MAX_ITEMS},
    closures:     {type: "embeddedArray", required: false, items: ClinicLocationClosureDef, maxItems: CLINIC_LOCATION_CLOSURES_MAX_ITEMS},
    isActive:     {type: "boolean", required: false},
} as const;

export type CreateClinicLocationFormType = InferCreateForm<typeof ClinicLocationSchemaDef>;
export type EditClinicLocationFormType = InferEditForm<typeof ClinicLocationSchemaDef>;
