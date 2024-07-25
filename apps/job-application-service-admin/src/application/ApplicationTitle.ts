import { Application as TApplication } from "../api/application/Application";

export const APPLICATION_TITLE_FIELD = "jobSeeker";

export const ApplicationTitle = (record: TApplication): string => {
  return record.jobSeeker?.toString() || String(record.id);
};
