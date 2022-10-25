import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsPhoneNumber } from 'class-validator';

@InputType()
export class UpdateServiceInput {
  @Field({ nullable: true })
  username?: string;

  @IsEmail()
  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  password?: string;

  @IsPhoneNumber()
  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  twoFactorResetCodes?: string;
}