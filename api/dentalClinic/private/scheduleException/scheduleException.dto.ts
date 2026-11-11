import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {ClinicLocationSimple} from "../../../../dto/clinicLocation.dto";
import type {PractitionerSimple} from "../../../../dto/practitioner.dto";
import type {ScheduleExceptionReason} from "./scheduleException.schema-def";

export type ScheduleException = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    practitioner?: PractitionerSimple;
    location?: ClinicLocationSimple;
    startAt: string;
    endAt: string;
    reason?: ScheduleExceptionReason;
    internalNote?: string;
};
