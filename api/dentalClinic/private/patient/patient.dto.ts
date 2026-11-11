import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {MedicalHistory} from "../../../../dto/medicalHistory.dto";
import type {CountrySimple} from "../../../../../core/dto/country.dto";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";
import type {PatientLanguage, PatientSource} from "../../../../constants";
import type {PatientSex} from "./patient.schema-def";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {Appointment} from "../appointment/appointment.dto";
import type {TreatmentPlan} from "../treatmentPlan/treatmentPlan.dto";
import type {PatientTrip} from "../patientTrip/patientTrip.dto";
import type {ClinicInquiry} from "../clinicInquiry/clinicInquiry.dto";

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
    /** The latest questionnaire the patient signed, kept from their request. */
    medicalHistory?: MedicalHistory;
    /**
     * The folder as a hub (UX-03), on the single read only: the newest of each related record, each list present only
     * when the caller may read that model.
     */
    appointments?: Appointment[];
    plans?: TreatmentPlan[];
    trips?: PatientTrip[];
    inquiries?: ClinicInquiry[];
    /** The next pending or confirmed appointment. */
    nextVisitAt?: string;
    /** What accepted quotes still owe, in the clinic currency. */
    balanceDue?: number;
    balanceCurrency?: CurrencySimple;
};
