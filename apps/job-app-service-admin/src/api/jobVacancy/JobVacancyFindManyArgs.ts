import { JobVacancyWhereInput } from "./JobVacancyWhereInput";
import { JobVacancyOrderByInput } from "./JobVacancyOrderByInput";

export type JobVacancyFindManyArgs = {
  where?: JobVacancyWhereInput;
  orderBy?: Array<JobVacancyOrderByInput>;
  skip?: number;
  take?: number;
};
