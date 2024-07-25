import { JsonValue } from "type-fest";
import { JobSeeker } from "../jobSeeker/JobSeeker";

export type Document = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  fileUrl: JsonValue;
  name: string | null;
  jobSeeker?: JobSeeker | null;
};
