import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { JobVacancyTitle } from "../jobVacancy/JobVacancyTitle";

export const EmployerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="CompanyName" source="companyName" />
        <TextInput label="Email" source="email" type="email" />
        <ReferenceArrayInput
          source="jobVacancies"
          reference="JobVacancy"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JobVacancyTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
