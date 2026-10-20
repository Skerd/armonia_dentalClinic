import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {ClinicLocationSimple} from "../../../../dto/clinicLocation.dto";
import type {PractitionerSimple} from "../../../../dto/practitioner.dto";

export type ScheduleException = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    practitioner?: PractitionerSimple;
    location?: ClinicLocationSimple;
    startAt: string;
    endAt: string;
    internalNote?: string;
};
