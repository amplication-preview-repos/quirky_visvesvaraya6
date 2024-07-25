import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { JobSeekerTitle } from "../jobSeeker/JobSeekerTitle";
import { JobVacancyTitle } from "../jobVacancy/JobVacancyTitle";

export const ApplicationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="jobSeeker.id"
          reference="JobSeeker"
          label="JobSeeker"
        >
          <SelectInput optionText={JobSeekerTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="jobVacancy.id"
          reference="JobVacancy"
          label="JobVacancy"
        >
          <SelectInput optionText={JobVacancyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
