import { JobListing as TJobListing } from "../api/jobListing/JobListing";

export const JOBLISTING_TITLE_FIELD = "title";

export const JobListingTitle = (record: TJobListing): string => {
  return record.title?.toString() || String(record.id);
};
