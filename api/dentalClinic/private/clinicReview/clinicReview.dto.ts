import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {AppointmentSimple} from "../../../../dto/appointment.dto";

export type ClinicReview = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    appointment?: AppointmentSimple;
    rating: number;
    comment?: string;
    authorName: string;
    isPublished: boolean;
};
