import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {
    AcceptTreatmentPlanFormDef,
    CreatePatientRequestFormDef,
    PatientAttachFilesFormDef,
    PatientCaseFormDef,
    PatientInquiryFormDef,
    PatientMessageFormDef,
    PatientMedicalHistoryFormDef,
    PatientTripDetailsFormDef,
    PayPlanDepositFormDef,
} from "./patientPortal.forms";

export function createPatientRequestFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(CreatePatientRequestFormDef, languageCode, form);
}

export function patientCaseFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(PatientCaseFormDef, languageCode, form);
}

export function patientInquiryFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(PatientInquiryFormDef, languageCode, form);
}

export function patientMessageFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(PatientMessageFormDef, languageCode, form);
}

export function patientAttachFilesFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(PatientAttachFilesFormDef, languageCode, form);
}

export function acceptTreatmentPlanFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(AcceptTreatmentPlanFormDef, languageCode, form);
}

export function payPlanDepositFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(PayPlanDepositFormDef, languageCode, form);
}

export function patientMedicalHistoryFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(PatientMedicalHistoryFormDef, languageCode, form);
}

export function patientTripDetailsFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(PatientTripDetailsFormDef, languageCode, form);
}
