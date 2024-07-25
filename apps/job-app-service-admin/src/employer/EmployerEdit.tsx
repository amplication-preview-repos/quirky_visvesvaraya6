import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { JobVacancyTitle } from "../jobVacancy/JobVacancyTitle";

export const EmployerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
