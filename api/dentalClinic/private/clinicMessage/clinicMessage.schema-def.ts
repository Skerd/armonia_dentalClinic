import {CLINIC_MESSAGE_BODY_MAX} from "../../../../constants";

/**
 * The stored message's fields that the sender writes (TD-B12). The inquiry, the sender side, the author and
 * the read time are set by the server. `validateSchemaDefAgainstMongoose` keeps this aligned with the Mongoose schema.
 */
export const ClinicMessageSchemaDef = {
    body:        {type: "string", required: true, min: 1, max: CLINIC_MESSAGE_BODY_MAX},
    attachments: {type: "mediaIdArray", required: false},
} as const;
