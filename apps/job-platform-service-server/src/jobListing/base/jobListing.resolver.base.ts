/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { JobListing } from "./JobListing";
import { JobListingCountArgs } from "./JobListingCountArgs";
import { JobListingFindManyArgs } from "./JobListingFindManyArgs";
import { JobListingFindUniqueArgs } from "./JobListingFindUniqueArgs";
import { CreateJobListingArgs } from "./CreateJobListingArgs";
import { UpdateJobListingArgs } from "./UpdateJobListingArgs";
import { DeleteJobListingArgs } from "./DeleteJobListingArgs";
import { ApplicationFindManyArgs } from "../../application/base/ApplicationFindManyArgs";
import { Application } from "../../application/base/Application";
import { JobListingService } from "../jobListing.service";
@graphql.Resolver(() => JobListing)
export class JobListingResolverBase {
  constructor(protected readonly service: JobListingService) {}

  async _jobListingsMeta(
    @graphql.Args() args: JobListingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [JobListing])
  async jobListings(
    @graphql.Args() args: JobListingFindManyArgs
  ): Promise<JobListing[]> {
    return this.service.jobListings(args);
  }

  @graphql.Query(() => JobListing, { nullable: true })
  async jobListing(
    @graphql.Args() args: JobListingFindUniqueArgs
  ): Promise<JobListing | null> {
    const result = await this.service.jobListing(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => JobListing)
  async createJobListing(
    @graphql.Args() args: CreateJobListingArgs
  ): Promise<JobListing> {
    return await this.service.createJobListing({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => JobListing)
  async updateJobListing(
    @graphql.Args() args: UpdateJobListingArgs
  ): Promise<JobListing | null> {
    try {
      return await this.service.updateJobListing({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => JobListing)
  async deleteJobListing(
    @graphql.Args() args: DeleteJobListingArgs
  ): Promise<JobListing | null> {
    try {
      return await this.service.deleteJobListing(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Application], { name: "applications" })
  async findApplications(
    @graphql.Parent() parent: JobListing,
    @graphql.Args() args: ApplicationFindManyArgs
  ): Promise<Application[]> {
    const results = await this.service.findApplications(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
