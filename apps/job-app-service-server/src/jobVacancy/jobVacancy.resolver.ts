import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { JobVacancyResolverBase } from "./base/jobVacancy.resolver.base";
import { JobVacancy } from "./base/JobVacancy";
import { JobVacancyService } from "./jobVacancy.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => JobVacancy)
export class JobVacancyResolver extends JobVacancyResolverBase {
  constructor(
    protected readonly service: JobVacancyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
