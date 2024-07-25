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
import { JobVacancyWhereInput } from "./JobVacancyWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class JobVacancyListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => JobVacancyWhereInput,
  })
  @ValidateNested()
  @Type(() => JobVacancyWhereInput)
  @IsOptional()
  @Field(() => JobVacancyWhereInput, {
    nullable: true,
  })
  every?: JobVacancyWhereInput;

  @ApiProperty({
    required: false,
    type: () => JobVacancyWhereInput,
  })
  @ValidateNested()
  @Type(() => JobVacancyWhereInput)
  @IsOptional()
  @Field(() => JobVacancyWhereInput, {
    nullable: true,
  })
  some?: JobVacancyWhereInput;

  @ApiProperty({
    required: false,
    type: () => JobVacancyWhereInput,
  })
  @ValidateNested()
  @Type(() => JobVacancyWhereInput)
  @IsOptional()
  @Field(() => JobVacancyWhereInput, {
    nullable: true,
  })
  none?: JobVacancyWhereInput;
}
export { JobVacancyListRelationFilter as JobVacancyListRelationFilter };
