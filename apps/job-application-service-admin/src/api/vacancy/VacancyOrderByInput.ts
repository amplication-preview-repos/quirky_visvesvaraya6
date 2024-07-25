import { SortOrder } from "../../util/SortOrder";

export type VacancyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  qualifications?: SortOrder;
  companyId?: SortOrder;
};
