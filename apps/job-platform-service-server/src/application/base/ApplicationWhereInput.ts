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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumApplicationStatus } from "./EnumApplicationStatus";
import { JsonFilter } from "../../util/JsonFilter";
import { JobListingWhereUniqueInput } from "../../jobListing/base/JobListingWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

@InputType()
class ApplicationWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    enum: EnumApplicationStatus,
  })
  @IsEnum(EnumApplicationStatus)
  @IsOptional()
  @Field(() => EnumApplicationStatus, {
    nullable: true,
  })
  status?: "Option1";

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  documents?: JsonFilter;

  @ApiProperty({
    required: false,
    type: () => JobListingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JobListingWhereUniqueInput)
  @IsOptional()
  @Field(() => JobListingWhereUniqueInput, {
    nullable: true,
  })
  jobListing?: JobListingWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  applicant?: StringNullableFilter;
}

export { ApplicationWhereInput as ApplicationWhereInput };