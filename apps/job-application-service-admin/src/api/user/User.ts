import { JsonValue } from "type-fest";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  surname: string | null;
  contactNumber: string | null;
  name: string | null;
  userType?: "Option1" | null;
  fullName: string | null;
  userRole?: "Option1" | null;
  userEmail: string | null;
  contactPhone: string | null;
  userPassword: string | null;
};
