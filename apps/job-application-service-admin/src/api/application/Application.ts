import { JsonValue } from "type-fest";
import { Vacancy } from "../vacancy/Vacancy";

export type Application = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  jobSeeker: string | null;
  documents: JsonValue;
  vacancy?: Vacancy | null;
};
