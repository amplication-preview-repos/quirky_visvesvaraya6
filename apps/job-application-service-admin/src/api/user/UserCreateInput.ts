import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  surname?: string | null;
  contactNumber?: string | null;
  name?: string | null;
  userType?: "Option1" | null;
  fullName?: string | null;
  userRole?: "Option1" | null;
  userEmail?: string | null;
  contactPhone?: string | null;
  userPassword?: string | null;
};
