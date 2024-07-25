import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  fileUrl?: SortOrder;
  name?: SortOrder;
  jobSeekerId?: SortOrder;
};
