import { JobSeeker as TJobSeeker } from "../api/jobSeeker/JobSeeker";

export const JOBSEEKER_TITLE_FIELD = "name";

export const JobSeekerTitle = (record: TJobSeeker): string => {
  return record.name?.toString() || String(record.id);
};
