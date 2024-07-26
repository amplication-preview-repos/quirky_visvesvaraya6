import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { JOBLISTING_TITLE_FIELD } from "./JobListingTitle";

export const JobListingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="description" source="description" />
        <TextField label="location" source="location" />
        <TextField label="title" source="title" />
        <TextField label="salaryRange" source="salaryRange" />
        <TextField label="postedBy" source="postedBy" />
        <ReferenceManyField
          reference="Application"
          target="jobListingId"
          label="Applications"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
