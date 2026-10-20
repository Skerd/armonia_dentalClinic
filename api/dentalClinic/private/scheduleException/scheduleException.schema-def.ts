import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const SCHEDULE_EXCEPTION_NOTE_MAX = 500;

/**
 * Time nobody can book: a dentist's time off (`practitioner`) or a whole
 * location closing (`location`) — exactly one of the two. The window is fixed
 * at create, after checking it against existing appointments; only the note changes.
 */
export const ScheduleExceptionSchemaDef = {
    practitioner: {type: "objectId", required: false},
    location:     {type: "objectId", required: false},
    startAt:      {type: "date", required: true},
    endAt:        {type: "date", required: true, afterField: "startAt"},
    internalNote: {type: "string", required: false, max: SCHEDULE_EXCEPTION_NOTE_MAX},
} as const;

export type CreateScheduleExceptionFormType = InferCreateForm<typeof ScheduleExceptionSchemaDef>;
export type EditScheduleExceptionFormType = InferEditForm<typeof ScheduleExceptionSchemaDef>;
