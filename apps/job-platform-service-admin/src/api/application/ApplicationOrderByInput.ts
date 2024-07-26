import { SortOrder } from "../../util/SortOrder";

export type ApplicationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  documents?: SortOrder;
  jobListingId?: SortOrder;
  applicant?: SortOrder;
};
