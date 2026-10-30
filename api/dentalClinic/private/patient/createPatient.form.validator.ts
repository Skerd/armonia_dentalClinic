import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {PatientSchemaDef} from "./patient.schema-def";

export function createPatientFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(PatientSchemaDef, languageCode, form);
}
