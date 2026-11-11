import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {PatientSimple} from "../../../../dto/patient.dto";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";
import type {ClinicLocationSimple} from "../../../../dto/clinicLocation.dto";
import type {ClinicServiceSimple} from "../../../../dto/clinicService.dto";
import type {PractitionerSimple} from "../../../../dto/practitioner.dto";
import type {ClinicServicePriceType} from "../clinicService/clinicService.schema-def";
import type {APPOINTMENT_CANCELLED_BY, APPOINTMENT_SOURCES, AppointmentStatus, AppointmentTimelineEvent} from "./appointment.constants";

export type AppointmentPatient = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
};

/** What the patient booked, as it was at booking time. */
export type AppointmentSnapshot = {
    serviceName: string;
    durationMinutes: number;
    priceType: ClinicServicePriceType;
    price?: number;
    practitionerName: string;
    locationName: string;
    locationAddress?: string;
    timezone: string;
};

export type Appointment = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    number: string;
    status: AppointmentStatus;
    source: (typeof APPOINTMENT_SOURCES)[number];
    service?: ClinicServiceSimple;
    location?: ClinicLocationSimple;
    practitioner?: PractitionerSimple;
    customer?: SimpleBlankUser;
    patientRecord?: PatientSimple;
    startAt: string;
    endAt: string;
    patient: AppointmentPatient;
    note?: string;
    snapshot: AppointmentSnapshot;
    currency?: CurrencySimple;
    policy: {cancellationDeadlineHours: number; rescheduleDeadlineHours: number};
    consent?: {version?: string; at: string};
    timeline: {event: AppointmentTimelineEvent; at: string; note?: string}[];
    rescheduleCount: number;
    cancelledAt?: string;
    cancelledBy?: (typeof APPOINTMENT_CANCELLED_BY)[number];
    cancellationReason?: string;
    anonymizedAt?: string;
};

/** One appointment block on the panel's day view. */
export type ClinicDayAppointment = {
    _id: string;
    number: string;
    status: AppointmentStatus;
    locationId: string;
    practitionerId: string;
    startAt: string;
    endAt: string;
    /** Only for callers who may read patient details. */
    patientName?: string;
    serviceName: string;
};

/** One location on the day view: its hours that day and a column per practitioner working there, in its own time zone. */
export type ClinicDayLocation = {
    _id: string;
    name: string;
    timezone: string;
    /** When the location is open that day (empty when it sets no hours or is closed); the grid spans at least this. */
    opening: {start: string; end: string}[];
    practitioners: {
        _id: string;
        displayName: string;
        title?: string;
        working: {start: string; end: string}[];
        timeOff: {start: string; end: string}[];
    }[];
};

export type ClinicDayResponse = {
    data: {
        date: string;
        /** The clinic's booking grid: a dragged appointment snaps to it. */
        slotIntervalMinutes: number;
        locations: ClinicDayLocation[];
        appointments: ClinicDayAppointment[];
    };
};
