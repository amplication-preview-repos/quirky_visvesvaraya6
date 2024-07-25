import { JobVacancy } from "../jobVacancy/JobVacancy";

export type Employer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  companyName: string | null;
  email: string | null;
  jobVacancies?: Array<JobVacancy>;
};
