import { Vacancy } from "../vacancy/Vacancy";

export type Company = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  password: string | null;
  companyName: string | null;
  vacancies?: Array<Vacancy>;
};
