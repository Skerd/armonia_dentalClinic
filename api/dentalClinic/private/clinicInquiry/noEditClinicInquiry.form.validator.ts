import {z} from "zod";
import {isStringZod} from "../../../../../core/helpers/zodBuilder";

/** The CRUD edit route changes nothing for an inquiry (it moves only through its actions); it only reads the id. */
export function noEditClinicInquiryFormSchema(languageCode: string, form: any = null) {
    return z.looseObject({
        _id: isStringZod(form?.["_idLabel"] ?? "_id", languageCode),
    });
}
