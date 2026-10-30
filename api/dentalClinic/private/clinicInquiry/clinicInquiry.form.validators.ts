import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {AssignInquiryFormDef, ClinicInquirySchemaDef, CloseInquiryFormDef, RequestInquiryInfoFormDef} from "./clinicInquiry.schema-def";

export function createClinicInquiryFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ClinicInquirySchemaDef, languageCode, form);
}

export function requestInquiryInfoFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(RequestInquiryInfoFormDef, languageCode, form);
}

export function closeInquiryFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(CloseInquiryFormDef, languageCode, form);
}

export function assignInquiryFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(AssignInquiryFormDef, languageCode, form);
}
