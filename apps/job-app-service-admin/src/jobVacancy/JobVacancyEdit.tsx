import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";
import { EmployerTitle } from "../employer/EmployerTitle";

export const JobVacancyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="Description" multiline source="description" />
        <ReferenceArrayInput
          source="applications"
          reference="Application"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApplicationTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="employer.id"
          reference="Employer"
          label="Employer"
        >
          <SelectInput optionText={EmployerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
