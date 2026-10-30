import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {MedicalHistory} from "../../../../dto/medicalHistory.dto";
import type {CountrySimple} from "../../../../../core/dto/country.dto";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {Media} from "../../../../../core/types";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";
import type {PatientSimple} from "../../../../dto/patient.dto";
import type {InfoRequestKind, InquiryStatus, PatientLanguage, PatientSource, TreatmentCategory} from "../../../../constants";

export const INQUIRY_TIMELINE_EVENTS = [
    "created",
    "review_started",
    "info_requested",
    "quoted",
    "files_added",
    "contact_shared",
    "medical_history",
    "assigned",
    "declined",
    "lost",
    "withdrawn",
    "converted",
] as const;
export type InquiryTimelineEvent = (typeof INQUIRY_TIMELINE_EVENTS)[number];

export type InquiryInfoRequest = {
    kind: InfoRequestKind;
    note?: string;
    requestedAt: string;
    fulfilledAt?: string;
};

export type ClinicInquiry = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    number: string;
    status: InquiryStatus;
    source: PatientSource;
    /** Masked (no last name, email or phones) until the patient shares them. */
    contact: {
        firstName: string;
        lastName?: string;
        email?: string;
        phone?: string;
        whatsapp?: string;
        country?: CountrySimple;
        preferredLanguage: PatientLanguage;
    };
    contactShared: boolean;
    treatmentsWanted: TreatmentCategory[];
    description?: string;
    travelFrom?: string;
    travelTo?: string;
    budget?: number;
    budgetCurrency?: CurrencySimple;
    files?: Media[];
    infoRequests: InquiryInfoRequest[];
    /** The patient's questionnaire, shared with each clinic of the request. */
    medicalHistory?: MedicalHistory;
    assignedTo?: SimpleBlankUser;
    patient?: PatientSimple;
    firstResponseAt?: string;
    lastMessageAt?: string;
    unreadForClinic: number;
    closedAt?: string;
    closeReason?: string;
    timeline: {event: InquiryTimelineEvent; at: string; note?: string}[];
};
