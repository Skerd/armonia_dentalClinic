import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ClinicConfigSchemaDef} from "./clinicConfig.schema-def";

export function editClinicConfigFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(ClinicConfigSchemaDef, languageCode, form, permissions, readPermissions);
}
