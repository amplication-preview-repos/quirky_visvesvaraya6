import { InputJsonValue } from "../../types";
import { VacancyWhereUniqueInput } from "../vacancy/VacancyWhereUniqueInput";

export type ApplicationCreateInput = {
  jobSeeker?: string | null;
  documents?: InputJsonValue;
  vacancy?: VacancyWhereUniqueInput | null;
};
