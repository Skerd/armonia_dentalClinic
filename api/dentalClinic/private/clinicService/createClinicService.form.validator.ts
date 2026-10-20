import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ClinicServiceSchemaDef} from "./clinicService.schema-def";

export function createClinicServiceFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ClinicServiceSchemaDef, languageCode, form);
}
