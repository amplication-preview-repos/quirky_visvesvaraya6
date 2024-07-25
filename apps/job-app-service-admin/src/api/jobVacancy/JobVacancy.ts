import { Application } from "../application/Application";
import { Employer } from "../employer/Employer";

export type JobVacancy = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  applications?: Array<Application>;
  employer?: Employer | null;
};
