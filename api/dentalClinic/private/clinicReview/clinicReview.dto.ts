import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {AppointmentSimple} from "../../../../dto/appointment.dto";

export type ClinicReview = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    appointment?: AppointmentSimple;
    rating: number;
    comment?: string;
    authorName: string;
    /** Set when the platform hid the review after a report (D191): it is gone from the public and from every rating. */
    hiddenByPlatform: boolean;
};

/** The kind the platform's report desk knows this review by (the module's `reportables`, D191). */
export const CLINIC_REVIEW_REPORT_KIND = "dentalClinic.review";
