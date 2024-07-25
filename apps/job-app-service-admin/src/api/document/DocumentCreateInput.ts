import { InputJsonValue } from "../../types";
import { JobSeekerWhereUniqueInput } from "../jobSeeker/JobSeekerWhereUniqueInput";

export type DocumentCreateInput = {
  fileUrl?: InputJsonValue;
  name?: string | null;
  jobSeeker?: JobSeekerWhereUniqueInput | null;
};
