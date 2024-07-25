/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { JobSeekerService } from "../jobSeeker.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { JobSeekerCreateInput } from "./JobSeekerCreateInput";
import { JobSeeker } from "./JobSeeker";
import { JobSeekerFindManyArgs } from "./JobSeekerFindManyArgs";
import { JobSeekerWhereUniqueInput } from "./JobSeekerWhereUniqueInput";
import { JobSeekerUpdateInput } from "./JobSeekerUpdateInput";
import { ApplicationFindManyArgs } from "../../application/base/ApplicationFindManyArgs";
import { Application } from "../../application/base/Application";
import { ApplicationWhereUniqueInput } from "../../application/base/ApplicationWhereUniqueInput";
import { DocumentFindManyArgs } from "../../document/base/DocumentFindManyArgs";
import { Document } from "../../document/base/Document";
import { DocumentWhereUniqueInput } from "../../document/base/DocumentWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class JobSeekerControllerBase {
  constructor(
    protected readonly service: JobSeekerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: JobSeeker })
  @nestAccessControl.UseRoles({
    resource: "JobSeeker",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createJobSeeker(
    @common.Body() data: JobSeekerCreateInput
  ): Promise<JobSeeker> {
    return await this.service.createJobSeeker({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        email: true,
        skills: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [JobSeeker] })
  @ApiNestedQuery(JobSeekerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "JobSeeker",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async jobSeekers(@common.Req() request: Request): Promise<JobSeeker[]> {
    const args = plainToClass(JobSeekerFindManyArgs, request.query);
    return this.service.jobSeekers({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        email: true,
        skills: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: JobSeeker })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "JobSeeker",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async jobSeeker(
    @common.Param() params: JobSeekerWhereUniqueInput
  ): Promise<JobSeeker | null> {
    const result = await this.service.jobSeeker({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        email: true,
        skills: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: JobSeeker })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "JobSeeker",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateJobSeeker(
    @common.Param() params: JobSeekerWhereUniqueInput,
    @common.Body() data: JobSeekerUpdateInput
  ): Promise<JobSeeker | null> {
    try {
      return await this.service.updateJobSeeker({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          email: true,
          skills: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: JobSeeker })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "JobSeeker",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteJobSeeker(
    @common.Param() params: JobSeekerWhereUniqueInput
  ): Promise<JobSeeker | null> {
    try {
      return await this.service.deleteJobSeeker({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          email: true,
          skills: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/applications")
  @ApiNestedQuery(ApplicationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Application",
    action: "read",
    possession: "any",
  })
  async findApplications(
    @common.Req() request: Request,
    @common.Param() params: JobSeekerWhereUniqueInput
  ): Promise<Application[]> {
    const query = plainToClass(ApplicationFindManyArgs, request.query);
    const results = await this.service.findApplications(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        status: true,

        jobSeeker: {
          select: {
            id: true,
          },
        },

        jobVacancy: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/applications")
  @nestAccessControl.UseRoles({
    resource: "JobSeeker",
    action: "update",
    possession: "any",
  })
  async connectApplications(
    @common.Param() params: JobSeekerWhereUniqueInput,
    @common.Body() body: ApplicationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      applications: {
        connect: body,
      },
    };
    await this.service.updateJobSeeker({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/applications")
  @nestAccessControl.UseRoles({
    resource: "JobSeeker",
    action: "update",
    possession: "any",
  })
  async updateApplications(
    @common.Param() params: JobSeekerWhereUniqueInput,
    @common.Body() body: ApplicationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      applications: {
        set: body,
      },
    };
    await this.service.updateJobSeeker({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/applications")
  @nestAccessControl.UseRoles({
    resource: "JobSeeker",
    action: "update",
    possession: "any",
  })
  async disconnectApplications(
    @common.Param() params: JobSeekerWhereUniqueInput,
    @common.Body() body: ApplicationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      applications: {
        disconnect: body,
      },
    };
    await this.service.updateJobSeeker({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/documents")
  @ApiNestedQuery(DocumentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Document",
    action: "read",
    possession: "any",
  })
  async findDocuments(
    @common.Req() request: Request,
    @common.Param() params: JobSeekerWhereUniqueInput
  ): Promise<Document[]> {
    const query = plainToClass(DocumentFindManyArgs, request.query);
    const results = await this.service.findDocuments(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        fileUrl: true,
        name: true,

        jobSeeker: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/documents")
  @nestAccessControl.UseRoles({
    resource: "JobSeeker",
    action: "update",
    possession: "any",
  })
  async connectDocuments(
    @common.Param() params: JobSeekerWhereUniqueInput,
    @common.Body() body: DocumentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documents: {
        connect: body,
      },
    };
    await this.service.updateJobSeeker({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/documents")
  @nestAccessControl.UseRoles({
    resource: "JobSeeker",
    action: "update",
    possession: "any",
  })
  async updateDocuments(
    @common.Param() params: JobSeekerWhereUniqueInput,
    @common.Body() body: DocumentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documents: {
        set: body,
      },
    };
    await this.service.updateJobSeeker({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/documents")
  @nestAccessControl.UseRoles({
    resource: "JobSeeker",
    action: "update",
    possession: "any",
  })
  async disconnectDocuments(
    @common.Param() params: JobSeekerWhereUniqueInput,
    @common.Body() body: DocumentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documents: {
        disconnect: body,
      },
    };
    await this.service.updateJobSeeker({
      where: params,
      data,
      select: { id: true },
    });
  }
}
