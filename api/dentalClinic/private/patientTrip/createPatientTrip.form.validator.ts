import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {PatientTripSchemaDef} from "./patientTrip.schema-def";

export function createPatientTripFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(PatientTripSchemaDef, languageCode, form);
}
