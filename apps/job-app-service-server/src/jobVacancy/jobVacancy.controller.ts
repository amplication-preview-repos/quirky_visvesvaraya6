import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { JobVacancyService } from "./jobVacancy.service";
import { JobVacancyControllerBase } from "./base/jobVacancy.controller.base";

@swagger.ApiTags("jobVacancies")
@common.Controller("jobVacancies")
export class JobVacancyController extends JobVacancyControllerBase {
  constructor(
    protected readonly service: JobVacancyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
