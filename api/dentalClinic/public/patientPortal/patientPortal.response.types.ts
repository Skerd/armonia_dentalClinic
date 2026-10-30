import type {DepositType, InfoRequestKind, InquiryStatus, TreatmentCategory, TreatmentPlanStatus} from "../../../../constants";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {TreatmentPlanLine, TreatmentPlanPhase, TreatmentPlanTotals} from "../../private/treatmentPlan/treatmentPlan.dto";
import type {InquiryInfoRequest} from "../../private/clinicInquiry/clinicInquiry.dto";
import type {ClinicMessage} from "../../private/clinicMessage/clinicMessage.dto";

/** A file the patient can open through the patient portal's own media route. */
export type PatientFile = {
    _id: string;
    name: string;
    mimeType?: string;
    size?: number;
};

/** A clinic the patient can send a request to. */
export type RequestableClinic = {
    _id: string;
    name: string;
    slug: string;
    logo?: string;
    cities: string[];
    languagesSpoken: string[];
    implantBrands: string[];
    headline?: string;
    /** Hours the clinic usually takes to answer; absent until it has answered enough requests. */
    medianFirstResponseHours?: number;
    treatmentCategories: TreatmentCategory[];
};
export type RequestableClinicsResponse = {data: RequestableClinic[]};

export type PatientRequestCreatedResponse = {data: {requestGroup: string; inquiries: number}};

/** The request at one clinic, as the patient sees it. */
export type PatientInquiry = {
    _id: string;
    number: string;
    status: InquiryStatus;
    clinic: {_id: string; name: string; slug: string; logo?: string};
    contactShared: boolean;
    infoRequests: InquiryInfoRequest[];
    openInfoRequests: InfoRequestKind[];
    files: PatientFile[];
    unreadForPatient: number;
    lastMessageAt?: string;
    createdAt: string;
};

/** One request as sent: what was asked and each clinic's answer so far. */
export type PatientCase = {
    requestGroup: string;
    treatmentsWanted: TreatmentCategory[];
    description?: string;
    travelFrom?: string;
    travelTo?: string;
    createdAt: string;
    inquiries: PatientInquiry[];
};
export type PatientCasesResponse = {data: PatientCase[]};
export type PatientCaseResponse = {data: PatientCase};

export type PatientUploadResponse = {data: PatientFile[]};
/** A thread message for the patient: attachments open through the patient portal. */
export type PatientMessage = Omit<ClinicMessage, "attachments"> & {attachments: PatientFile[]};
export type PatientThreadResponse = {data: PatientMessage[]};
export type PatientInquiryResponse = {data: PatientInquiry};

/** A clinic's quote as the patient compares it; drafts are never shown. */
export type PatientPlan = {
    _id: string;
    number: string;
    inquiry: string;
    clinic: {_id: string; name: string};
    status: TreatmentPlanStatus;
    optionLabel?: string;
    currency?: CurrencySimple;
    phases: TreatmentPlanPhase[];
    lines: TreatmentPlanLine[];
    totals: TreatmentPlanTotals;
    depositType: DepositType;
    depositValue?: number;
    refundableUntilDays?: number;
    validUntil?: string;
    notes?: string;
    terms?: string;
    sentAt?: string;
    acceptedAt?: string;
};
export type PatientPlansResponse = {data: PatientPlan[]};
export type PatientPlanAcceptedResponse = {data: {plan: PatientPlan}};
