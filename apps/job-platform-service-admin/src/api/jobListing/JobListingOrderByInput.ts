import { SortOrder } from "../../util/SortOrder";

export type JobListingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  location?: SortOrder;
  title?: SortOrder;
  salaryRange?: SortOrder;
  postedBy?: SortOrder;
};
