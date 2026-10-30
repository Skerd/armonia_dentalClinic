import {buildCreateZodSchema, buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {RecordPlanPaymentFormDef, RefundPlanPaymentFormDef, TreatmentPlanSchemaDef} from "./treatmentPlan.schema-def";

export function createTreatmentPlanFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(TreatmentPlanSchemaDef, languageCode, form);
}

export function editTreatmentPlanFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(TreatmentPlanSchemaDef, languageCode, form, permissions, readPermissions);
}

export function recordPlanPaymentFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(RecordPlanPaymentFormDef, languageCode, form);
}

export function refundPlanPaymentFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(RefundPlanPaymentFormDef, languageCode, form);
}
