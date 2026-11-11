import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {isEnumZod} from "../../../../../core/helpers/zodBuilder";
import {withTableFormValidator} from "../../../../../core/utilities/zod/shared.validator";
import {z} from "zod";
import {APPOINTMENT_WHEN} from "./appointment.constants";
import {
    CancelAppointmentFormDef,
    ClinicDayFormDef,
    CreateAppointmentFormDef,
    RescheduleAppointmentFormDef,
} from "./appointment.forms";

export function createAppointmentFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(CreateAppointmentFormDef, languageCode, form);
}

export function cancelAppointmentFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(CancelAppointmentFormDef, languageCode, form);
}

export function rescheduleAppointmentFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(RescheduleAppointmentFormDef, languageCode, form);
}

export function clinicDayFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ClinicDayFormDef, languageCode, form);
}

/** The appointments list: the table params plus the "When" quick filter. */
export function appointmentListFormSchema(languageCode: string, form: any = null) {
    return withTableFormValidator(languageCode, form, {
        when: isEnumZod(form?.["whenLabel"] ?? "when", APPOINTMENT_WHEN, APPOINTMENT_WHEN.join(", "), languageCode).optional(),
    });
}

export type AppointmentListFormType = z.infer<ReturnType<typeof appointmentListFormSchema>>;
