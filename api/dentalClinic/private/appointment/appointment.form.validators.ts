import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
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
