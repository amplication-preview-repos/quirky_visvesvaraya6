import { SortOrder } from "../../util/SortOrder";

export type CompanyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  companyName?: SortOrder;
};
