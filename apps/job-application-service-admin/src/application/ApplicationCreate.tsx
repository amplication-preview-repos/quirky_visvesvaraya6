import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { VacancyTitle } from "../vacancy/VacancyTitle";

export const ApplicationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="jobSeeker" source="jobSeeker" />
        <div />
        <ReferenceInput source="vacancy.id" reference="Vacancy" label="vacancy">
          <SelectInput optionText={VacancyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
