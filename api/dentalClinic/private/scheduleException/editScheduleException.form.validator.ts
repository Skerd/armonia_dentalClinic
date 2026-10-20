import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ScheduleExceptionSchemaDef} from "./scheduleException.schema-def";

export function editScheduleExceptionFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(ScheduleExceptionSchemaDef, languageCode, form, permissions, readPermissions);
}
