import { Field, ID, ObjectType} from "type-graphql";
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Station } from './Station'
import { Length, IsDefined, IsMobilePhone } from "class-validator";

@Entity()
@ObjectType()
export class City {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @IsDefined()
    @Length(3, 255)
    @Field(() => String, { nullable: false })
    @Column({ nullable: false })
    name: string;

    @IsDefined()
    @IsMobilePhone()
    @Field(() => String, { nullable: false })
    @Column({ nullable: false })
    phone: string;

    @Field(type => [Station], { nullable: true })
    @OneToMany(() => Station, station => station.city, { cascade: true })
    stations?: Station[];

}