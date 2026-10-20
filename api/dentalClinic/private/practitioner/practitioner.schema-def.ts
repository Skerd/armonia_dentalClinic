import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {WeeklyHoursSlotDef} from "../../../../../core/helpers/weeklyHours.schema-def";

export const PRACTITIONER_ROLES = ["dentist", "hygienist", "orthodontist", "other"] as const;
export type PractitionerRole = (typeof PRACTITIONER_ROLES)[number];

export const PRACTITIONER_NAME_MAX = 128;
export const PRACTITIONER_TITLE_MAX = 64;
export const PRACTITIONER_BIO_MAX = 4000;
export const PRACTITIONER_LANGUAGE_MAX = 32;
export const PRACTITIONER_LANGUAGES_MAX_ITEMS = 10;
export const PRACTITIONER_SCHEDULE_MAX_ITEMS = 42;

/** One weekly working-hours row at one location, in that location's timezone. */
export const PractitionerScheduleRowDef = {
    location: {type: "objectId", required: true},
    ...WeeklyHoursSlotDef,
} as const;

export const PractitionerSchemaDef = {
    /**
     * Staff login linked to this profile; that user then sees only their own appointments.
     * Not called `user`: authMW puts the caller on `req.body.user`.
     */
    staffUser:   {type: "objectId", required: false},
    displayName: {type: "string", required: true, min: 1, max: PRACTITIONER_NAME_MAX},
    title:       {type: "string", required: false, max: PRACTITIONER_TITLE_MAX},
    role:        {type: "enum", required: true, options: PRACTITIONER_ROLES},
    bio:         {type: "string", required: false, max: PRACTITIONER_BIO_MAX},
    photo:       {type: "mediaId", required: false, publicAccess: true},
    languages:   {type: "stringArray", required: false, maxItems: PRACTITIONER_LANGUAGES_MAX_ITEMS, itemMax: PRACTITIONER_LANGUAGE_MAX},
    /** What this person does and where: there is no "everyone does everything" default. */
    services:    {type: "objectIdArray", required: false},
    locations:   {type: "objectIdArray", required: false},
    schedule:    {type: "embeddedArray", required: false, items: PractitionerScheduleRowDef, maxItems: PRACTITIONER_SCHEDULE_MAX_ITEMS},
    isBookable:  {type: "boolean", required: false},
    isActive:    {type: "boolean", required: false},
    sortOrder:   {type: "number", required: false},
} as const;

export type CreatePractitionerFormType = InferCreateForm<typeof PractitionerSchemaDef>;
export type EditPractitionerFormType = InferEditForm<typeof PractitionerSchemaDef>;
