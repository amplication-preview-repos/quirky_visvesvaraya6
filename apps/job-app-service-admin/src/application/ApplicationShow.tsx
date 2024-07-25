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
import { JOBVACANCY_TITLE_FIELD } from "../jobVacancy/JobVacancyTitle";

export const ApplicationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Status" source="status" />
        <ReferenceField
          label="JobSeeker"
          source="jobseeker.id"
          reference="JobSeeker"
        >
          <TextField source={JOBSEEKER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="JobVacancy"
          source="jobvacancy.id"
          reference="JobVacancy"
        >
          <TextField source={JOBVACANCY_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
