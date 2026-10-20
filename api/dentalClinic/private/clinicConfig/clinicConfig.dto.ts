import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";

export type ClinicConfig = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    publicBookingEnabled: boolean;
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
};
