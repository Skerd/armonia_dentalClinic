import type {MedicalHistoryAnswer, MedicalHistoryQuestion} from "../constants";

/** A signed medical-history questionnaire, as the patient sent it. */
export type MedicalHistory = {
    version: string;
    answers: {question: MedicalHistoryQuestion; answer: MedicalHistoryAnswer; detail?: string}[];
    medications?: string;
    /** The patient's typed name as signature. */
    signedName: string;
    submittedAt: string;
};
