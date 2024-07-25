import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { JobSeekerTitle } from "../jobSeeker/JobSeekerTitle";

export const DocumentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
