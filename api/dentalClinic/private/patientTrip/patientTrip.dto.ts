import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {PatientSimple} from "../../../../dto/patient.dto";
import type {TreatmentPlanSimple} from "../../../../dto/treatmentPlan.dto";
import type {PatientTripStatus} from "../../../../constants";

export type PatientTrip = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    patient?: PatientSimple;
    plan?: TreatmentPlanSimple;
    phase?: number;
    status: PatientTripStatus;
    arrivalAt: string;
    departureAt: string;
    arrivalFlight?: string;
    departureFlight?: string;
    accommodation?: string;
    transfer?: boolean;
    companions?: number;
    notes?: string;
};
