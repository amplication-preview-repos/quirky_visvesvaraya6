/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { Application } from "../../application/base/Application";
import { Employer } from "../../employer/base/Employer";

@ObjectType()
class JobVacancy {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Application],
  })
  @ValidateNested()
  @Type(() => Application)
  @IsOptional()
  applications?: Array<Application>;

  @ApiProperty({
    required: false,
    type: () => Employer,
  })
  @ValidateNested()
  @Type(() => Employer)
  @IsOptional()
  employer?: Employer | null;
}

export { JobVacancy as JobVacancy };
