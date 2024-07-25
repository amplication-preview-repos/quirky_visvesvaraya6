import { JobSeekerWhereUniqueInput } from "../jobSeeker/JobSeekerWhereUniqueInput";
import { JobVacancyWhereUniqueInput } from "../jobVacancy/JobVacancyWhereUniqueInput";

export type ApplicationUpdateInput = {
  status?: "Option1" | null;
  jobSeeker?: JobSeekerWhereUniqueInput | null;
  jobVacancy?: JobVacancyWhereUniqueInput | null;
};
