import { JsonValue } from "type-fest";
import { JobListing } from "../jobListing/JobListing";

export type Application = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  documents: JsonValue;
  jobListing?: JobListing | null;
  applicant: string | null;
};
