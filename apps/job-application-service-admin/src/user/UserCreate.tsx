import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  SelectInput,
} from "react-admin";

import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Username" source="username" />
        <TextInput label="Email" source="email" type="email" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="surname" source="surname" />
        <TextInput label="contactNumber" source="contactNumber" />
        <TextInput label="name" source="name" />
        <SelectInput
          source="userType"
          label="userType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="fullName" source="fullName" />
        <SelectInput
          source="userRole"
          label="userRole"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="userEmail" source="userEmail" />
        <TextInput label="contactPhone" source="contactPhone" />
        <TextInput label="userPassword" source="userPassword" />
      </SimpleForm>
    </Create>
  );
};
