import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { JOBLISTING_TITLE_FIELD } from "../jobListing/JobListingTitle";

export const ApplicationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
