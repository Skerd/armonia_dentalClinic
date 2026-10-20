import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ScheduleExceptionSchemaDef} from "./scheduleException.schema-def";

export function createScheduleExceptionFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ScheduleExceptionSchemaDef, languageCode, form);
}
