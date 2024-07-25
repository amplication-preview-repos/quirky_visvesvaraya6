import { SortOrder } from "../../util/SortOrder";

export type JobSeekerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  skills?: SortOrder;
};
