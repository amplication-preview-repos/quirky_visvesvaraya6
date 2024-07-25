import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { VACANCY_TITLE_FIELD } from "../vacancy/VacancyTitle";

export const ApplicationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Applications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="jobSeeker" source="jobSeeker" />
        <TextField label="documents" source="documents" />
        <ReferenceField label="vacancy" source="vacancy.id" reference="Vacancy">
          <TextField source={VACANCY_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
