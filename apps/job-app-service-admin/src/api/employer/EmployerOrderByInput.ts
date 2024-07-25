import { SortOrder } from "../../util/SortOrder";

export type EmployerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  companyName?: SortOrder;
  email?: SortOrder;
};
