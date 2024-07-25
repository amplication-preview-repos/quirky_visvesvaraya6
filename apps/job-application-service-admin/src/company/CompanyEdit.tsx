import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { VacancyTitle } from "../vacancy/VacancyTitle";

export const CompanyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" />
        <TextInput label="password" source="password" />
        <TextInput label="companyName" source="companyName" />
        <ReferenceArrayInput
          source="vacancies"
          reference="Vacancy"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VacancyTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
