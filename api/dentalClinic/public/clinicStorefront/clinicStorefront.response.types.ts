import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {WeeklyHoursSlot} from "../../../../../core/helpers/weeklyHours.schema-def";
import type {ClinicServicePriceType} from "../../private/clinicService/clinicService.schema-def";
import type {PractitionerRole} from "../../private/practitioner/practitioner.schema-def";
import type {AppointmentPatient} from "../../private/appointment/appointment.dto";
import type {AppointmentStatus} from "../../private/appointment/appointment.constants";

export type ClinicStorefrontLocation = {
    _id: string;
    name: string;
    address?: string;
    phone?: string;
    email?: string;
    timezone: string;
    openingHours: WeeklyHoursSlot[];
};

export type ClinicStorefrontService = {
    _id: string;
    name: string;
    slug: string;
    description?: string;
    images: string[];
    durationMinutes: number;
    priceType: ClinicServicePriceType;
    price?: number;
};

export type ClinicStorefrontPractitioner = {
    _id: string;
    displayName: string;
    title?: string;
    role: PractitionerRole;
    bio?: string;
    photo?: string;
    languages: string[];
    /** Ids of the services and locations this person can be booked for. */
    services: string[];
    locations: string[];
};

/** Everything the public site needs before the first availability search. */
export type ClinicStorefrontConfigResponse = {
    data: {
        company: {name: string; logo?: string; email?: string; phoneNumber?: string; website?: string};
        currency: CurrencySimple;
        guestBookingAllowed: boolean;
        requireStaffConfirmation: boolean;
        patientNoteEnabled: boolean;
        minNoticeHours: number;
        maxAdvanceDays: number;
        cancellationDeadlineHours: number;
        rescheduleDeadlineHours: number;
        privacyNoticeVersion?: string;
        privacyNoticeText?: string;
        locations: ClinicStorefrontLocation[];
        services: ClinicStorefrontService[];
        practitioners: ClinicStorefrontPractitioner[];
    };
};

export type ClinicSlot = {
    /** Local start time at the location, `HH:mm`. */
    time: string;
    startAt: string;
    /** Who is free at that time (several when booking "anyone"). */
    practitioners: string[];
};

export type ClinicSlotsResponse = {
    data: {
        timezone: string;
        days: {date: string; slots: ClinicSlot[]}[];
    };
};

/** What a patient (signed in or holding the link) may see of their appointment. */
export type PublicAppointment = {
    _id: string;
    number: string;
    status: AppointmentStatus;
    serviceId: string;
    locationId: string;
    practitionerId: string;
    serviceName: string;
    durationMinutes: number;
    priceType: ClinicServicePriceType;
    price?: number;
    currency?: CurrencySimple;
    practitionerName: string;
    locationName: string;
    locationAddress?: string;
    timezone: string;
    startAt: string;
    endAt: string;
    patient: AppointmentPatient;
    note?: string;
    cancelUntil: string;
    rescheduleUntil: string;
    canCancel: boolean;
    canReschedule: boolean;
};

/** A portal account's appointments across clinics, each with its clinic and manage link token. */
export type MyAppointmentsResponse = {
    data: {
        appointment: PublicAppointment;
        company: {
            name: string;
            slug: string
        };
        manageToken: string
    }[];
};

export type AppointmentBookingResponse = {
    data: {
        appointment: PublicAppointment;
        /** Guest link token for the "manage your appointment" page. */
        manageToken: string;
    };
};

export type PublicAppointmentResponse = {data: PublicAppointment};
/** After a reschedule the old link stops working; the page continues with this one. */
export type RescheduledAppointmentResponse = {data: {appointment: PublicAppointment; manageToken: string}};
export type PublicAppointmentsResponse = {data: PublicAppointment[]};
