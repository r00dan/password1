import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

@InputType()
export class CreateServiceInput {
  @IsNotEmpty()
  @Field()
  id: string;

  @IsNotEmpty()
  @Field()
  name: string;

  @Field({ nullable: true })
  username?: string;

  @IsEmail()
  @Field()
  email: string;

  @Field({ nullable: true })
  password?: string;

  @IsPhoneNumber()
  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  twoFactorResetCodes?: string;

  @Field()
  url: string;

  @IsNotEmpty()
  @Field()
  createTime: Date;
}