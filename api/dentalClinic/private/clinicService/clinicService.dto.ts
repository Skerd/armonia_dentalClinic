import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";
import type {ClinicServicePriceType} from "./clinicService.schema-def";
import type {TreatmentCategory} from "../../../../constants";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";

export type ClinicService = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    slug: string;
    description?: string;
    category: TreatmentCategory;
    perTooth: boolean;
    images?: Media[];
    videos?: Media[];
    durationMinutes: number;
    bufferBeforeMinutes: number;
    bufferAfterMinutes: number;
    priceType: ClinicServicePriceType;
    price?: number;
    /** Not stored: the clinic's one currency, added by the panel routes so a price is never shown bare (UX-07). */
    currency?: CurrencySimple;
    onlineBookable: boolean;
    isPublic: boolean;
    isActive: boolean;
    sortOrder: number;
};
