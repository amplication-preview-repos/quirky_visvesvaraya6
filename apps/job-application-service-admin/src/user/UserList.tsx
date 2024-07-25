import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
