import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { VacancyTitle } from "../vacancy/VacancyTitle";

export const ApplicationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="jobSeeker" source="jobSeeker" />
        <div />
        <ReferenceInput source="vacancy.id" reference="Vacancy" label="vacancy">
          <SelectInput optionText={VacancyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
