/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { ApplicationCreateNestedManyWithoutJobVacanciesInput } from "./ApplicationCreateNestedManyWithoutJobVacanciesInput";
import { Type } from "class-transformer";
import { EmployerWhereUniqueInput } from "../../employer/base/EmployerWhereUniqueInput";

@InputType()
class JobVacancyCreateInput {
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
  title?: string | null;

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
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => ApplicationCreateNestedManyWithoutJobVacanciesInput,
  })
  @ValidateNested()
  @Type(() => ApplicationCreateNestedManyWithoutJobVacanciesInput)
  @IsOptional()
  @Field(() => ApplicationCreateNestedManyWithoutJobVacanciesInput, {
    nullable: true,
  })
  applications?: ApplicationCreateNestedManyWithoutJobVacanciesInput;

  @ApiProperty({
    required: false,
    type: () => EmployerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmployerWhereUniqueInput)
  @IsOptional()
  @Field(() => EmployerWhereUniqueInput, {
    nullable: true,
  })
  employer?: EmployerWhereUniqueInput | null;
}

export { JobVacancyCreateInput as JobVacancyCreateInput };