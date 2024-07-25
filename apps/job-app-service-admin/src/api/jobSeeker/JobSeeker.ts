import { Application } from "../application/Application";
import { Document } from "../document/Document";

export type JobSeeker = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  skills: string | null;
  applications?: Array<Application>;
  documents?: Array<Document>;
};
