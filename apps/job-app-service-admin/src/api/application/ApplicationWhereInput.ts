import { StringFilter } from "../../util/StringFilter";
import { JobSeekerWhereUniqueInput } from "../jobSeeker/JobSeekerWhereUniqueInput";
import { JobVacancyWhereUniqueInput } from "../jobVacancy/JobVacancyWhereUniqueInput";

export type ApplicationWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  jobSeeker?: JobSeekerWhereUniqueInput;
  jobVacancy?: JobVacancyWhereUniqueInput;
};
