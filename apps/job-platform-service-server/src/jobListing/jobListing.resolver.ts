import * as graphql from "@nestjs/graphql";
import { JobListingResolverBase } from "./base/jobListing.resolver.base";
import { JobListing } from "./base/JobListing";
import { JobListingService } from "./jobListing.service";

@graphql.Resolver(() => JobListing)
export class JobListingResolver extends JobListingResolverBase {
  constructor(protected readonly service: JobListingService) {
    super(service);
  }
}
