import { JobVacancy as TJobVacancy } from "../api/jobVacancy/JobVacancy";

export const JOBVACANCY_TITLE_FIELD = "title";

export const JobVacancyTitle = (record: TJobVacancy): string => {
  return record.title?.toString() || String(record.id);
};
