import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {PractitionerSchemaDef} from "./practitioner.schema-def";

export function editPractitionerFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(PractitionerSchemaDef, languageCode, form, permissions, readPermissions);
}
