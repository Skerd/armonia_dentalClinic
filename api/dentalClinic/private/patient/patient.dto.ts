import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {CountrySimple} from "../../../../../core/dto/country.dto";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";
import type {PatientLanguage, PatientSource} from "../../../../constants";
import type {PatientSex} from "./patient.schema-def";

export type Patient = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    number: string;
    firstName: string;
    lastName: string;
    dateOfBirth?: string;
    sex?: PatientSex;
    email?: string;
    phone?: string;
    whatsapp?: string;
    preferredLanguage: PatientLanguage;
    address?: {country?: CountrySimple; city?: string; street?: string; postalCode?: string};
    emergencyContact?: {name?: string; phone?: string; relation?: string};
    homeDentist?: {name?: string; practice?: string; email?: string; phone?: string};
    source: PatientSource;
    tags: string[];
    notes?: string;
    /** The patient's own portal account, when they have one. */
    account?: SimpleBlankUser;
};
