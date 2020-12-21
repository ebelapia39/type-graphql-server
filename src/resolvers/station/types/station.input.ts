import { Station } from "../../../entities/Station";
import { InputType, Field, Int } from "type-graphql";
import { Length, IsDefined, IsNumber } from "class-validator";

@InputType()
export class StationInput implements Partial<Station>{
  @IsNumber()
  @IsDefined()
  @Field(type => Int)
  cityId: number;

  @IsDefined()
  @Length(3, 255)
  @Field(type => String)
  name: string;
}