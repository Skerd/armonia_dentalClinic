import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ClinicServiceSchemaDef} from "./clinicService.schema-def";

export function editClinicServiceFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(ClinicServiceSchemaDef, languageCode, form, permissions, readPermissions);
}
