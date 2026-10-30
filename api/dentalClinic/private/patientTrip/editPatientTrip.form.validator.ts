import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {PatientTripSchemaDef} from "./patientTrip.schema-def";

export function editPatientTripFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(PatientTripSchemaDef, languageCode, form, permissions, readPermissions);
}
