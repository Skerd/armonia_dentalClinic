import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {PATIENT_LANGUAGES, PATIENT_SOURCES} from "../../../../constants";

export const PATIENT_SEXES = ["female", "male", "other", "unspecified"] as const;
export type PatientSex = (typeof PATIENT_SEXES)[number];

export const PATIENT_NAME_MAX = 64;
export const PATIENT_PHONE_MAX = 32;
export const PATIENT_CITY_MAX = 96;
export const PATIENT_STREET_MAX = 256;
export const PATIENT_POSTAL_CODE_MAX = 32;
export const PATIENT_RELATION_MAX = 64;
export const PATIENT_PRACTICE_MAX = 128;
export const PATIENT_NOTES_MAX = 2000;
export const PATIENT_TAG_MAX = 32;
export const PATIENT_TAGS_MAX_ITEMS = 20;

/** Where the patient lives. Tourism patients come from abroad, so the city is free text. */
const PatientAddressDef = {
    country:    {type: "objectId", required: false},
    city:       {type: "string", required: false, max: PATIENT_CITY_MAX},
    street:     {type: "string", required: false, max: PATIENT_STREET_MAX},
    postalCode: {type: "string", required: false, max: PATIENT_POSTAL_CODE_MAX},
} as const;

const PatientEmergencyContactDef = {
    name:     {type: "string", required: false, max: PATIENT_NAME_MAX},
    phone:    {type: "string", required: false, max: PATIENT_PHONE_MAX},
    relation: {type: "string", required: false, max: PATIENT_RELATION_MAX},
} as const;

/** The dentist at home who sees the patient between trips and receives the handover. */
const PatientHomeDentistDef = {
    name:     {type: "string", required: false, max: PATIENT_NAME_MAX},
    practice: {type: "string", required: false, max: PATIENT_PRACTICE_MAX},
    email:    {type: "string", required: false, format: "email"},
    phone:    {type: "string", required: false, max: PATIENT_PHONE_MAX},
} as const;

export const PatientSchemaDef = {
    firstName:         {type: "string", required: true, min: 1, max: PATIENT_NAME_MAX},
    lastName:          {type: "string", required: true, min: 1, max: PATIENT_NAME_MAX},
    dateOfBirth:       {type: "date", required: false, validation: "notInTheFuture"},
    sex:               {type: "enum", required: false, options: PATIENT_SEXES},
    email:             {type: "string", required: false, format: "email"},
    phone:             {type: "string", required: false, max: PATIENT_PHONE_MAX},
    whatsapp:          {type: "string", required: false, max: PATIENT_PHONE_MAX},
    /** Emails, documents and the handover are written in this language. */
    preferredLanguage: {type: "enum", required: true, options: PATIENT_LANGUAGES},
    address:           {type: "embedded", required: false, items: PatientAddressDef},
    emergencyContact:  {type: "embedded", required: false, items: PatientEmergencyContactDef},
    homeDentist:       {type: "embedded", required: false, items: PatientHomeDentistDef},
    source:            {type: "enum", required: true, options: PATIENT_SOURCES},
    tags:              {type: "stringArray", required: false, maxItems: PATIENT_TAGS_MAX_ITEMS, itemMax: PATIENT_TAG_MAX},
    /** Administrative notes only. Clinical findings belong in clinical notes. */
    notes:             {type: "string", required: false, max: PATIENT_NOTES_MAX},
} as const;

export type CreatePatientFormType = InferCreateForm<typeof PatientSchemaDef>;
export type EditPatientFormType = InferEditForm<typeof PatientSchemaDef>;
