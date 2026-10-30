import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {
    AcceptTreatmentPlanFormDef,
    CreatePatientRequestFormDef,
    PatientAttachFilesFormDef,
    PatientCaseFormDef,
    PatientInquiryFormDef,
    PatientMessageFormDef,
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
