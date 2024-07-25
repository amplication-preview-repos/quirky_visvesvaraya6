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

import { EMPLOYER_TITLE_FIELD } from "./EmployerTitle";

export const EmployerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="CompanyName" source="companyName" />
        <TextField label="Email" source="email" />
        <ReferenceManyField
          reference="JobVacancy"
          target="employerId"
          label="JobVacancies"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
