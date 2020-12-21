import { Field, ID, Int, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Length, IsDefined, IsNumber } from "class-validator";
import { City } from "./City";

@Entity()
@ObjectType()
export class Station {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @IsDefined()
    @Length(3, 255)
    @Field(() => String, { nullable: false })
    @Column({ nullable: false })
    name: string;

    @Field(type => City, { nullable: false })
    @ManyToOne(() => City, { nullable: false })
    @JoinColumn({ name: 'cityId' })
    city: City;

    @IsNumber()
    @IsDefined()
    @Field(type => Int, { nullable: false })
    @Column({ nullable: false })
    public cityId: number;
}