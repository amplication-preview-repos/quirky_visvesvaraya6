import { Module } from "@nestjs/common";
import { JobListingModuleBase } from "./base/jobListing.module.base";
import { JobListingService } from "./jobListing.service";
import { JobListingController } from "./jobListing.controller";
import { JobListingResolver } from "./jobListing.resolver";

@Module({
  imports: [JobListingModuleBase],
  controllers: [JobListingController],
  providers: [JobListingService, JobListingResolver],
  exports: [JobListingService],
})
export class JobListingModule {}
