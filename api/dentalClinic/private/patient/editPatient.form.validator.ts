import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {PatientSchemaDef} from "./patient.schema-def";

export function editPatientFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(PatientSchemaDef, languageCode, form, permissions, readPermissions);
}
