/** Locales a patient can be written to in; the same five the platform's emails and UI ship in. */
export const PATIENT_LANGUAGES = ["it-IT", "en-US", "de-CH", "fr-FR", "sq-AL"] as const;
export type PatientLanguage = (typeof PATIENT_LANGUAGES)[number];

/**
 * What a treatment is, independent of the clinic's own naming. Lets the portal filter
 * clinics by treatment and lets a patient say what they are asking about.
 */
export const TREATMENT_CATEGORIES = [
    "checkup",
    "hygiene",
    "whitening",
    "filling",
    "root_canal",
    "extraction",
    "implant",
    "all_on_x",
    "crown",
    "bridge",
    "veneer",
    "denture",
    "orthodontics",
    "bone_graft",
    "other",
] as const;
export type TreatmentCategory = (typeof TREATMENT_CATEGORIES)[number];

/** How a patient first reached the clinic. */
export const PATIENT_SOURCES = [
    "portal",
    "clinic_site",
    "booking",
    "phone",
    "whatsapp",
    "walk_in",
    "referral",
    "agency",
    "other",
] as const;
export type PatientSource = (typeof PATIENT_SOURCES)[number];

/**
 * An estimate request's life at one clinic. `converted` means the clinic opened a patient
 * folder from it; the patient's other clinics are unaffected.
 */
export const INQUIRY_STATUSES = ["new", "in_review", "info_requested", "quoted", "declined", "lost", "withdrawn", "converted"] as const;
export type InquiryStatus = (typeof INQUIRY_STATUSES)[number];
/** Statuses in which the clinic and the patient can still talk and add files. */
export const INQUIRY_OPEN_STATUSES: readonly InquiryStatus[] = ["new", "in_review", "info_requested", "quoted"];

/** What a clinic can ask the patient for before it can quote. */
export const INFO_REQUEST_KINDS = ["opg", "cbct", "photos", "medical_history", "other"] as const;
export type InfoRequestKind = (typeof INFO_REQUEST_KINDS)[number];

/** One request goes to at most this many clinics. */
export const INQUIRY_MAX_CLINICS = 5;
export const INQUIRY_DESCRIPTION_MAX = 4000;
export const INQUIRY_FILES_MAX = 20;
export const INQUIRY_REASON_MAX = 500;
export const CLINIC_MESSAGE_BODY_MAX = 4000;
export const CLINIC_MESSAGE_ATTACHMENTS_MAX = 10;

/** Files a patient or clinic may attach: photos, PDFs, DICOM images, zipped scans and STL models. */
export const PATIENT_FILE_MIME_TYPES = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "application/pdf",
    "application/dicom",
    "application/zip",
    "model/stl",
] as const;
/** CBCT scans arrive as zipped DICOM series. */
export const PATIENT_FILE_MAX_BYTES = 200 * 1024 * 1024;

/**
 * A quote's life. `superseded` is a sent quote the clinic replaced with a revised one; `rejected`
 * is one the patient did not take because they accepted another.
 */
export const TREATMENT_PLAN_STATUSES = ["draft", "sent", "accepted", "rejected", "expired", "superseded"] as const;
export type TreatmentPlanStatus = (typeof TREATMENT_PLAN_STATUSES)[number];

export const TREATMENT_PLAN_LINE_KINDS = ["treatment", "package"] as const;
export type TreatmentPlanLineKind = (typeof TREATMENT_PLAN_LINE_KINDS)[number];

export const DEPOSIT_TYPES = ["none", "fixed", "percent"] as const;
export type DepositType = (typeof DEPOSIT_TYPES)[number];

/** Teeth in FDI (ISO 3950) notation: permanent 11–48, then primary 51–85. */
export const FDI_PERMANENT_TEETH = [
    "18", "17", "16", "15", "14", "13", "12", "11", "21", "22", "23", "24", "25", "26", "27", "28",
    "48", "47", "46", "45", "44", "43", "42", "41", "31", "32", "33", "34", "35", "36", "37", "38",
] as const;
export const FDI_PRIMARY_TEETH = [
    "55", "54", "53", "52", "51", "61", "62", "63", "64", "65",
    "85", "84", "83", "82", "81", "71", "72", "73", "74", "75",
] as const;
export const FDI_TEETH: readonly string[] = [...FDI_PERMANENT_TEETH, ...FDI_PRIMARY_TEETH];

export const TREATMENT_PLAN_PHASES_MAX = 6;
export const TREATMENT_PLAN_LINES_MAX = 60;
export const TREATMENT_PLAN_TEXT_MAX = 4000;
