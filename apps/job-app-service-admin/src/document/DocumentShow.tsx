import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { JOBSEEKER_TITLE_FIELD } from "../jobSeeker/JobSeekerTitle";

export const DocumentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
