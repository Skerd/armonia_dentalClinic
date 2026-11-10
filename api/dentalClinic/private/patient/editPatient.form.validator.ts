import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import type {ValidationContext} from "../../../../../core/helpers/zodBuilder";
import {PatientSchemaDef} from "./patient.schema-def";

export function editPatientFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}, context: ValidationContext = {}) {
    return buildEditZodSchema(PatientSchemaDef, languageCode, form, permissions, readPermissions, context);
}
