import { Application as TApplication } from "../api/application/Application";

export const APPLICATION_TITLE_FIELD = "applicant";

export const ApplicationTitle = (record: TApplication): string => {
  return record.applicant?.toString() || String(record.id);
};
