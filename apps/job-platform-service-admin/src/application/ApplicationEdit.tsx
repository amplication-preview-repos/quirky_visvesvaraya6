import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  ReferenceInput,
  TextInput,
} from "react-admin";
import { JobListingTitle } from "../jobListing/JobListingTitle";

export const ApplicationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <div />
        <ReferenceInput
          source="jobListing.id"
          reference="JobListing"
          label="jobListing"
        >
          <SelectInput optionText={JobListingTitle} />
        </ReferenceInput>
        <TextInput label="applicant" source="applicant" />
      </SimpleForm>
    </Edit>
  );
};
