import {z} from "zod";
import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {isIntegerZod} from "../../../../../core/helpers/zodBuilder";
import {AppointmentPatientDef} from "../../private/appointment/appointment.forms";
import {
    BookAppointmentFormDef,
    ClinicSlotsFormDef,
    ManageAppointmentFormDef,
    ManageReviewFormDef,
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

export function manageReviewFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ManageReviewFormDef, languageCode, form);
}

export function rescheduleManagedAppointmentFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(RescheduleManagedAppointmentFormDef, languageCode, form);
}

/** The patient block on its own, so the site can show per-field messages before booking. */
export function appointmentPatientFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(AppointmentPatientDef, languageCode, form);
}

/** The clinic's published reviews on its site (D178): how many of the latest to send. */
export function clinicReviewsFormSchema(languageCode: string, form: Record<string, string> | null = null) {
    return z.object({
        limit: isIntegerZod(form?.["limitLabel"] ?? "limit", languageCode, {min: 1, max: 20}).optional(),
    });
}

export type ClinicReviewsFormType = z.infer<ReturnType<typeof clinicReviewsFormSchema>>;
