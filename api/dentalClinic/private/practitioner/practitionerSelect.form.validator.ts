import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {validateSelectForm} from "../../../../../core/utilities/zod/shared.validator";

/** Dentist dropdown, optionally limited to those who do a service at a location (the staff booking form). */
export function practitionerSelectFormSchema(languageCode: string, form: any = null) {
    return validateSelectForm(languageCode, form).extend({
        service: isObjectIdZod(form?.["serviceLabel"] || "service", languageCode).optional(),
        location: isObjectIdZod(form?.["locationLabel"] || "location", languageCode).optional(),
    });
}
