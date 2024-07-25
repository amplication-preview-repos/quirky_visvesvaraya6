import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  surname?: StringNullableFilter;
  contactNumber?: StringNullableFilter;
  name?: StringNullableFilter;
  userType?: "Option1";
  fullName?: StringNullableFilter;
  userRole?: "Option1";
  userEmail?: StringNullableFilter;
  contactPhone?: StringNullableFilter;
  userPassword?: StringNullableFilter;
};
