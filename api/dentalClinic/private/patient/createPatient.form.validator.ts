import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import type {ValidationContext} from "../../../../../core/helpers/zodBuilder";
import {PatientSchemaDef} from "./patient.schema-def";

export function createPatientFormSchema(languageCode: string, form: any = null, _permissions?: unknown, _readPermissions?: unknown, context: ValidationContext = {}) {
    return buildCreateZodSchema(PatientSchemaDef, languageCode, form, context);
}
