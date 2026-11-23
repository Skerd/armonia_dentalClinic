import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ClinicReviewSchemaDef} from "./clinicReview.schema-def";

export function editClinicReviewFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(ClinicReviewSchemaDef, languageCode, form, permissions, readPermissions);
}
