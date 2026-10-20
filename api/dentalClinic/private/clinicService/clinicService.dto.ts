import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";
import type {ClinicServicePriceType} from "./clinicService.schema-def";

export type ClinicService = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    slug: string;
    description?: string;
    images?: Media[];
    durationMinutes: number;
    bufferBeforeMinutes: number;
    bufferAfterMinutes: number;
    priceType: ClinicServicePriceType;
    price?: number;
    onlineBookable: boolean;
    isPublic: boolean;
    isActive: boolean;
    sortOrder: number;
};
