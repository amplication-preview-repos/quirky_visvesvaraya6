import { JobSeekerWhereUniqueInput } from "../jobSeeker/JobSeekerWhereUniqueInput";
import { JobVacancyWhereUniqueInput } from "../jobVacancy/JobVacancyWhereUniqueInput";

export type ApplicationCreateInput = {
  status?: "Option1" | null;
  jobSeeker?: JobSeekerWhereUniqueInput | null;
  jobVacancy?: JobVacancyWhereUniqueInput | null;
};
