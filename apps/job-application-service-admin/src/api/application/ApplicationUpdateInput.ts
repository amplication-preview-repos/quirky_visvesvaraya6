import { InputJsonValue } from "../../types";
import { VacancyWhereUniqueInput } from "../vacancy/VacancyWhereUniqueInput";

export type ApplicationUpdateInput = {
  jobSeeker?: string | null;
  documents?: InputJsonValue;
  vacancy?: VacancyWhereUniqueInput | null;
};
