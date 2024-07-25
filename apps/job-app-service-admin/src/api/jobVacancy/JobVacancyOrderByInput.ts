import { SortOrder } from "../../util/SortOrder";

export type JobVacancyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  employerId?: SortOrder;
};
