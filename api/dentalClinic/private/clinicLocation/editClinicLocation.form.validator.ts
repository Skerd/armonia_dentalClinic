import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ClinicLocationSchemaDef} from "./clinicLocation.schema-def";

export function editClinicLocationFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(ClinicLocationSchemaDef, languageCode, form, permissions, readPermissions);
}
