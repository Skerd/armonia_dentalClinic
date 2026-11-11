import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const SCHEDULE_EXCEPTION_NOTE_MAX = 500;

/** Why the time is blocked, so the team sees it at a glance instead of reading the note. */
export const SCHEDULE_EXCEPTION_REASONS = ["holiday", "sick", "training", "closure", "other"] as const;
export type ScheduleExceptionReason = (typeof SCHEDULE_EXCEPTION_REASONS)[number];

/**
 * Time nobody can book: a dentist's time off (`practitioner`) or a whole
 * location closing (`location`) — exactly one of the two, fixed at create. The window can be moved later; each
 * time it is checked against existing appointments.
 */
export const ScheduleExceptionSchemaDef = {
    practitioner: {type: "objectId", required: false},
    location:     {type: "objectId", required: false},
    startAt:      {type: "date", required: true},
    endAt:        {type: "date", required: true, afterField: "startAt"},
    reason:       {type: "enum", required: false, options: SCHEDULE_EXCEPTION_REASONS},
    internalNote: {type: "string", required: false, max: SCHEDULE_EXCEPTION_NOTE_MAX},
} as const;

export type CreateScheduleExceptionFormType = InferCreateForm<typeof ScheduleExceptionSchemaDef>;
export type EditScheduleExceptionFormType = InferEditForm<typeof ScheduleExceptionSchemaDef>;
