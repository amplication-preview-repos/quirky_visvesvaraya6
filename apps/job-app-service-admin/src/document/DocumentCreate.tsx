import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { JobSeekerTitle } from "../jobSeeker/JobSeekerTitle";

export const DocumentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="jobSeeker.id"
          reference="JobSeeker"
          label="JobSeeker"
        >
          <SelectInput optionText={JobSeekerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
