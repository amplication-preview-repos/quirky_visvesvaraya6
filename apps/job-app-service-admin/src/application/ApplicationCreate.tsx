import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { JobSeekerTitle } from "../jobSeeker/JobSeekerTitle";
import { JobVacancyTitle } from "../jobVacancy/JobVacancyTitle";

export const ApplicationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
