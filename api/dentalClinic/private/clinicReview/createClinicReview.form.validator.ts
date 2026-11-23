import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ClinicReviewSchemaDef} from "./clinicReview.schema-def";

export function createClinicReviewFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ClinicReviewSchemaDef, languageCode, form);
}
