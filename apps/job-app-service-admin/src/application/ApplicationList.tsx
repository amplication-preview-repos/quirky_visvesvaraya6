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
import { JOBSEEKER_TITLE_FIELD } from "../jobSeeker/JobSeekerTitle";
import { JOBVACANCY_TITLE_FIELD } from "../jobVacancy/JobVacancyTitle";

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
        <TextField label="Status" source="status" />
        <ReferenceField
          label="JobSeeker"
          source="jobseeker.id"
          reference="JobSeeker"
        >
          <TextField source={JOBSEEKER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="JobVacancy"
          source="jobvacancy.id"
          reference="JobVacancy"
        >
          <TextField source={JOBVACANCY_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
