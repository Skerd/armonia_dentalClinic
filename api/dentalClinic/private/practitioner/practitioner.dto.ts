import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";
import type {ClinicLocationSimple} from "../../../../dto/clinicLocation.dto";
import type {ClinicServiceSimple} from "../../../../dto/clinicService.dto";
import type {PractitionerRole} from "./practitioner.schema-def";

export type PractitionerScheduleRow = {
    location?: ClinicLocationSimple;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
};

export type Practitioner = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    staffUser?: SimpleBlankUser;
    displayName: string;
    title?: string;
    role: PractitionerRole;
    bio?: string;
    photo?: Media;
    languages: string[];
    services?: ClinicServiceSimple[];
    locations?: ClinicLocationSimple[];
    schedule: PractitionerScheduleRow[];
    isBookable: boolean;
    isActive: boolean;
    sortOrder: number;
};
