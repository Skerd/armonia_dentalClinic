import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {PractitionerSchemaDef} from "./practitioner.schema-def";

export function createPractitionerFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(PractitionerSchemaDef, languageCode, form);
}
