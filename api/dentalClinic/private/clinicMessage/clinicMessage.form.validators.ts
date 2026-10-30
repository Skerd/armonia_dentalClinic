import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {InquiryThreadFormDef, SendClinicMessageFormDef} from "./clinicMessage.forms";

export function inquiryThreadFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(InquiryThreadFormDef, languageCode, form);
}

export function sendClinicMessageFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(SendClinicMessageFormDef, languageCode, form);
}
