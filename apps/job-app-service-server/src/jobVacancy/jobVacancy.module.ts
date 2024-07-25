import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { JobVacancyModuleBase } from "./base/jobVacancy.module.base";
import { JobVacancyService } from "./jobVacancy.service";
import { JobVacancyController } from "./jobVacancy.controller";
import { JobVacancyResolver } from "./jobVacancy.resolver";

@Module({
  imports: [JobVacancyModuleBase, forwardRef(() => AuthModule)],
  controllers: [JobVacancyController],
  providers: [JobVacancyService, JobVacancyResolver],
  exports: [JobVacancyService],
})
export class JobVacancyModule {}
