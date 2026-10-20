import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {AppointmentPatientDef} from "../../private/appointment/appointment.forms";
import {
    BookAppointmentFormDef,
    ClinicSlotsFormDef,
    ManageAppointmentFormDef,
    RescheduleManagedAppointmentFormDef,
} from "./clinicStorefront.forms";

export function clinicSlotsFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ClinicSlotsFormDef, languageCode, form);
}

export function bookAppointmentFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(BookAppointmentFormDef, languageCode, form);
}

export function manageAppointmentFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ManageAppointmentFormDef, languageCode, form);
}

export function rescheduleManagedAppointmentFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(RescheduleManagedAppointmentFormDef, languageCode, form);
}

/** The patient block on its own, so the site can show per-field messages before booking. */
export function appointmentPatientFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(AppointmentPatientDef, languageCode, form);
}
