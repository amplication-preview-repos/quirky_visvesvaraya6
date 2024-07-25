import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { JOBSEEKER_TITLE_FIELD } from "../jobSeeker/JobSeekerTitle";

export const DocumentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Documents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="FileUrl" source="fileUrl" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="JobSeeker"
          source="jobseeker.id"
          reference="JobSeeker"
        >
          <TextField source={JOBSEEKER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
