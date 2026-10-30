import type {Media} from "../../../../../core/types";
import type {ClinicMessageSender} from "./clinicMessage.forms";

/** One message of an inquiry's thread, as either side sees it. */
export type ClinicMessage = {
    _id: string;
    from: ClinicMessageSender;
    /** The clinic staff member's name; patients appear as themselves. */
    authorName?: string;
    body: string;
    attachments: Media[];
    readAt?: string;
    createdAt: string;
};
