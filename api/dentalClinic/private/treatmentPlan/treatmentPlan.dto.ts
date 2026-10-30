import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {PatientSimple} from "../../../../dto/patient.dto";
import type {ClinicInquirySimple} from "../../../../dto/clinicInquiry.dto";
import type {TreatmentPlanSimple} from "../../../../dto/treatmentPlan.dto";
import type {ClinicServiceSimple} from "../../../../dto/clinicService.dto";
import type {DepositType, TreatmentPlanLineKind, TreatmentPlanPaymentStatus, TreatmentPlanStatus} from "../../../../constants";

export const TREATMENT_PLAN_TIMELINE_EVENTS = [
    "created", "sent", "revised", "accepted", "rejected", "expired", "superseded", "payment_received", "payment_failed", "refunded",
] as const;
export type TreatmentPlanTimelineEvent = (typeof TREATMENT_PLAN_TIMELINE_EVENTS)[number];

export type TreatmentPlanPhase = {title: string; visits: number; estimatedDays: number; minGapDaysAfterPrevious?: number};

export type TreatmentPlanLine = {
    phase: number;
    kind: TreatmentPlanLineKind;
    service?: ClinicServiceSimple;
    name: string;
    teeth: string[];
    material?: string;
    brand?: string;
    quantity: number;
    unitPrice: number;
    discount?: number;
    warrantyYears?: number;
    /** quantity × unitPrice − discount, never below zero. */
    total: number;
};

export type TreatmentPlanTotals = {subtotal: number; discount: number; total: number; deposit: number};

export type TreatmentPlan = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    number: string;
    status: TreatmentPlanStatus;
    inquiry?: ClinicInquirySimple;
    patient?: PatientSimple;
    optionLabel?: string;
    version: number;
    supersedes?: TreatmentPlanSimple;
    currency?: CurrencySimple;
    phases: TreatmentPlanPhase[];
    lines: TreatmentPlanLine[];
    depositType: DepositType;
    depositValue?: number;
    refundableUntilDays?: number;
    totals: TreatmentPlanTotals;
    validUntil?: string;
    notes?: string;
    terms?: string;
    sentAt?: string;
    acceptance?: {name: string; at: string};
    paymentStatus: TreatmentPlanPaymentStatus;
    amountPaid: number;
    /** The total less what was paid. */
    amountDue: number;
    timeline: {event: TreatmentPlanTimelineEvent; at: string; note?: string}[];
};
