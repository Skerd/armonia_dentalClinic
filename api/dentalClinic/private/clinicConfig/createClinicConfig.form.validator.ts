import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ClinicConfigSchemaDef} from "./clinicConfig.schema-def";

export function createClinicConfigFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ClinicConfigSchemaDef, languageCode, form);
}
