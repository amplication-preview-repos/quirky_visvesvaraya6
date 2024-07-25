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

import { JOBSEEKER_TITLE_FIELD } from "./JobSeekerTitle";
import { JOBVACANCY_TITLE_FIELD } from "../jobVacancy/JobVacancyTitle";

export const JobSeekerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Email" source="email" />
        <TextField label="Skills" source="skills" />
        <ReferenceManyField
          reference="Application"
          target="jobSeekerId"
          label="Applications"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Document"
          target="jobSeekerId"
          label="Documents"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
