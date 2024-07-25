import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { JOBSEEKER_TITLE_FIELD } from "../jobSeeker/JobSeekerTitle";
import { JOBVACANCY_TITLE_FIELD } from "./JobVacancyTitle";
import { EMPLOYER_TITLE_FIELD } from "../employer/EmployerTitle";

export const JobVacancyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Title" source="title" />
        <TextField label="Description" source="description" />
        <ReferenceField
          label="Employer"
          source="employer.id"
          reference="Employer"
        >
          <TextField source={EMPLOYER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Application"
          target="jobVacancyId"
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
      </SimpleShowLayout>
    </Show>
  );
};
