import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JobVacancyServiceBase } from "./base/jobVacancy.service.base";

@Injectable()
export class JobVacancyService extends JobVacancyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
