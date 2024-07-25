import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { VACANCY_TITLE_FIELD } from "../vacancy/VacancyTitle";

export const ApplicationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="jobSeeker" source="jobSeeker" />
        <TextField label="documents" source="documents" />
        <ReferenceField label="vacancy" source="vacancy.id" reference="Vacancy">
          <TextField source={VACANCY_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
