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
import { JOBLISTING_TITLE_FIELD } from "../jobListing/JobListingTitle";

export const ApplicationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Applications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="status" source="status" />
        <TextField label="documents" source="documents" />
        <ReferenceField
          label="jobListing"
          source="joblisting.id"
          reference="JobListing"
        >
          <TextField source={JOBLISTING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="applicant" source="applicant" />
      </Datagrid>
    </List>
  );
};
