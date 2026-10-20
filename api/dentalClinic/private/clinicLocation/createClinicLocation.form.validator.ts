import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ClinicLocationSchemaDef} from "./clinicLocation.schema-def";

export function createClinicLocationFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ClinicLocationSchemaDef, languageCode, form);
}
