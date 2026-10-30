import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";
import type {Media} from "../../../../../core/types";
import type {PatientLanguage} from "../../../../constants";

export type ClinicProfileText = {
    locale: PatientLanguage;
    headline?: string;
    description?: string;
    warrantyPolicy?: string;
    travelInfo?: string;
};

export type ClinicAccreditation = {title: string; issuer?: string; year?: number};

export type ClinicConfig = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    publicBookingEnabled: boolean;
    listedOnPortal: boolean;
    currency?: CurrencySimple;
    slotIntervalMinutes: number;
    minNoticeHours: number;
    maxAdvanceDays: number;
    cancellationDeadlineHours: number;
    rescheduleDeadlineHours: number;
    noShowGraceMinutes: number;
    guestBookingAllowed: boolean;
    requireStaffConfirmation: boolean;
    patientNoteEnabled: boolean;
    reminderHoursBefore: number;
    reminderSms: boolean;
    includeServiceInMessages: boolean;
    retentionMonths: number;
    privacyNoticeVersion?: string;
    privacyNoticeText?: string;
    notifyUsers?: SimpleBlankUser[];
    inquiriesEnabled: boolean;
    inquiryNotifyUsers?: SimpleBlankUser[];
    responseTargetHours: number;
    languagesSpoken: string[];
    implantBrands: string[];
    nearestAirport?: string;
    profileTexts: ClinicProfileText[];
    accreditations: ClinicAccreditation[];
    gallery?: Media[];
    quoteValidityDays: number;
    quoteTerms?: string;
};
