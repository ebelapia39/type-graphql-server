import { City } from "../../../entities/City";
import { InputType, Field} from "type-graphql";
import { Length, IsDefined, IsMobilePhone } from "class-validator";

@InputType()
export class CityInput implements Partial<City>{
  @IsDefined()
  @Length(3, 255)
  @Field(type => String)
  name: string;

  @IsMobilePhone()
  @IsDefined()
  @Field(type => String)
  phone: string;
}