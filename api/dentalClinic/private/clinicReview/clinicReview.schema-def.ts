import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const CLINIC_REVIEW_COMMENT_MAX = 2000;
export const CLINIC_REVIEW_AUTHOR_NAME_MAX = 128;
export const CLINIC_REVIEW_RATING = {min: 1, max: 5} as const;

/**
 * A patient's review of a completed appointment (D178): the rating, a comment and the name it is shown under, never
 * anything about their health (SEC-06). Publishing is the publish action, not a form field.
 */
export const ClinicReviewSchemaDef = {
    appointment: {type: "objectId", required: true},
    rating:      {type: "number", required: true, ...CLINIC_REVIEW_RATING},
    comment:     {type: "string", required: false, max: CLINIC_REVIEW_COMMENT_MAX},
    authorName:  {type: "string", required: true, min: 1, max: CLINIC_REVIEW_AUTHOR_NAME_MAX},
} as const;

export type CreateClinicReviewFormType = InferCreateForm<typeof ClinicReviewSchemaDef>;
export type EditClinicReviewFormType = InferEditForm<typeof ClinicReviewSchemaDef>;
