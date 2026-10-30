import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {
    DEPOSIT_TYPES,
    FDI_TEETH,
    TREATMENT_PLAN_LINE_KINDS,
    TREATMENT_PLAN_LINES_MAX,
    TREATMENT_PLAN_PHASES_MAX,
    TREATMENT_PLAN_TEXT_MAX,
} from "../../../../constants";

export const TREATMENT_PLAN_LABEL_MAX = 80;
export const TREATMENT_PLAN_PHASE_TITLE_MAX = 120;
export const TREATMENT_PLAN_LINE_NAME_MAX = 160;
export const TREATMENT_PLAN_LINE_DETAIL_MAX = 80;
export const TREATMENT_PLAN_VISITS = {min: 1, max: 10} as const;
export const TREATMENT_PLAN_DAYS = {min: 1, max: 60} as const;
export const TREATMENT_PLAN_GAP_DAYS = {min: 0, max: 730} as const;
export const TREATMENT_PLAN_QUANTITY = {min: 1, max: 100} as const;
export const TREATMENT_PLAN_WARRANTY_YEARS = {min: 0, max: 50} as const;
export const TREATMENT_PLAN_REFUNDABLE_DAYS = {min: 0, max: 365} as const;

/** One trip to the clinic: implants, then crowns after healing, are two phases. */
export const TreatmentPlanPhaseDef = {
    title:                   {type: "string", required: true, min: 1, max: TREATMENT_PLAN_PHASE_TITLE_MAX},
    visits:                  {type: "number", required: true, ...TREATMENT_PLAN_VISITS},
    /** Days the patient should plan to stay. */
    estimatedDays:           {type: "number", required: true, ...TREATMENT_PLAN_DAYS},
    /** Healing time before this phase can start, after the previous one ends. */
    minGapDaysAfterPrevious: {type: "number", required: false, ...TREATMENT_PLAN_GAP_DAYS},
} as const;

/** One priced line: a treatment on some teeth, or a package item (hotel nights, transfer). */
export const TreatmentPlanLineDef = {
    phase:         {type: "number", required: true, min: 1, max: TREATMENT_PLAN_PHASES_MAX},
    kind:          {type: "enum", required: true, options: TREATMENT_PLAN_LINE_KINDS},
    service:       {type: "objectId", required: false},
    name:          {type: "string", required: true, min: 1, max: TREATMENT_PLAN_LINE_NAME_MAX},
    /** FDI tooth numbers; empty for whole-mouth work and package lines. */
    teeth:         {type: "stringArray", required: false, maxItems: FDI_TEETH.length, itemMin: 2, itemMax: 2},
    material:      {type: "string", required: false, max: TREATMENT_PLAN_LINE_DETAIL_MAX},
    brand:         {type: "string", required: false, max: TREATMENT_PLAN_LINE_DETAIL_MAX},
    quantity:      {type: "number", required: true, ...TREATMENT_PLAN_QUANTITY},
    unitPrice:     {type: "number", required: true, min: 0},
    /** An amount off this line, in the plan's currency. */
    discount:      {type: "number", required: false, min: 0},
    warrantyYears: {type: "number", required: false, ...TREATMENT_PLAN_WARRANTY_YEARS},
} as const;

export const TreatmentPlanSchemaDef = {
    /** The estimate request it answers, or the patient's folder for a plan made at the clinic. */
    inquiry:            {type: "objectId", required: false},
    patient:            {type: "objectId", required: false},
    /** Tells alternatives apart, e.g. "Straumann implants" and "Osstem implants". */
    optionLabel:        {type: "string", required: false, max: TREATMENT_PLAN_LABEL_MAX},
    phases:             {type: "embeddedArray", required: true, items: TreatmentPlanPhaseDef, minItems: 1, maxItems: TREATMENT_PLAN_PHASES_MAX},
    lines:              {type: "embeddedArray", required: true, items: TreatmentPlanLineDef, minItems: 1, maxItems: TREATMENT_PLAN_LINES_MAX},
    depositType:        {type: "enum", required: true, options: DEPOSIT_TYPES},
    /** An amount for `fixed`, a percentage of the total for `percent`. */
    depositValue:       {type: "number", required: false, min: 0},
    /** The deposit is refunded if the patient cancels at least this many days before the first visit. */
    refundableUntilDays: {type: "number", required: false, ...TREATMENT_PLAN_REFUNDABLE_DAYS},
    /** Last day the patient can accept; set from the clinic's default when the quote is sent, if empty. */
    validUntil:         {type: "string", required: false, format: "localDate"},
    notes:              {type: "string", required: false, max: TREATMENT_PLAN_TEXT_MAX},
    terms:              {type: "string", required: false, max: TREATMENT_PLAN_TEXT_MAX},
} as const;

export const TREATMENT_PLAN_PAYMENT_NOTE_MAX = 200;

/** Money the clinic took itself (cash, card terminal, bank transfer) against an accepted plan. */
export const RecordPlanPaymentFormDef = {
    _id:    {type: "objectId", required: true},
    amount: {type: "number", required: true, min: 0.01},
    note:   {type: "string", required: false, max: TREATMENT_PLAN_PAYMENT_NOTE_MAX},
} as const;
export type RecordPlanPaymentFormType = InferCreateForm<typeof RecordPlanPaymentFormDef>;

/** Gives back up to `amount` of what was paid: online charges through the gateway, the rest by hand. */
export const RefundPlanPaymentFormDef = {
    _id:    {type: "objectId", required: true},
    amount: {type: "number", required: true, min: 0.01},
    reason: {type: "string", required: true, min: 1, max: TREATMENT_PLAN_PAYMENT_NOTE_MAX},
} as const;
export type RefundPlanPaymentFormType = InferCreateForm<typeof RefundPlanPaymentFormDef>;

export type CreateTreatmentPlanFormType = InferCreateForm<typeof TreatmentPlanSchemaDef>;
export type EditTreatmentPlanFormType = InferEditForm<typeof TreatmentPlanSchemaDef>;
