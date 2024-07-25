import { JobSeeker } from "../jobSeeker/JobSeeker";
import { JobVacancy } from "../jobVacancy/JobVacancy";

export type Application = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  jobSeeker?: JobSeeker | null;
  jobVacancy?: JobVacancy | null;
};
