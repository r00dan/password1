import { Field, ObjectType } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { Column, Entity, PrimaryColumn } from "typeorm";

@ObjectType()
@Entity('service')
export class Service {
  @Field()
  @PrimaryColumn()
  id!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  username?: string;

  @Field()
  @Column()
  email?: string;

  @Field()
  @Column()
  password: string;

  @Field()
  @Column()
  phone?: string;

  @Field()
  @Column()
  twoFactorResetCodes: string;

  @Field()
  @Column()
  url?: string;

  @Field(type => Date)
  @Column()
  @Type(() => Date)
  createTime!: Date;
}