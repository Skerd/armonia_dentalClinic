import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";
import {CLINIC_MESSAGE_BODY_MAX} from "../../../../constants";

export const CLINIC_MESSAGE_SENDERS = ["patient", "clinic"] as const;
export type ClinicMessageSender = (typeof CLINIC_MESSAGE_SENDERS)[number];

/** The thread of one inquiry. */
export const InquiryThreadFormDef = {
    _id: {type: "objectId", required: true},
} as const;
export type InquiryThreadFormType = InferCreateForm<typeof InquiryThreadFormDef>;

/** A message from the clinic; attachments are uploaded with it. */
export const SendClinicMessageFormDef = {
    _id:         {type: "objectId", required: true},
    body:        {type: "string", required: true, min: 1, max: CLINIC_MESSAGE_BODY_MAX},
    attachments: {type: "mediaIdArray", required: false},
} as const;
export type SendClinicMessageFormType = InferCreateForm<typeof SendClinicMessageFormDef>;
