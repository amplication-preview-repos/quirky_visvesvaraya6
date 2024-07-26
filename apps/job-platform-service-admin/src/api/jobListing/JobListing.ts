import { Application } from "../application/Application";

export type JobListing = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  location: string | null;
  title: string | null;
  salaryRange: string | null;
  postedBy: string | null;
  applications?: Array<Application>;
};
