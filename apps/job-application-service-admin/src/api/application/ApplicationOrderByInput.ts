import { SortOrder } from "../../util/SortOrder";

export type ApplicationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  jobSeeker?: SortOrder;
  documents?: SortOrder;
  vacancyId?: SortOrder;
};
