import { Company } from "../company/Company";
import { Application } from "../application/Application";

export type Vacancy = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  qualifications: string | null;
  company?: Company | null;
  applications?: Array<Application>;
};
