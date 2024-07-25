import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Username" source="username" />
        <TextField label="Email" source="email" />
        <TextField label="Roles" source="roles" />
        <TextField label="surname" source="surname" />
        <TextField label="contactNumber" source="contactNumber" />
        <TextField label="name" source="name" />
        <TextField label="userType" source="userType" />
        <TextField label="fullName" source="fullName" />
        <TextField label="userRole" source="userRole" />
        <TextField label="userEmail" source="userEmail" />
        <TextField label="contactPhone" source="contactPhone" />
        <TextField label="userPassword" source="userPassword" />
      </SimpleShowLayout>
    </Show>
  );
};
