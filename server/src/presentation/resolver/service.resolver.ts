import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { CreateServiceInput, UpdateServiceInput } from 'src/presentation/input';
import { ServiceUseCase } from "src/domain";
import { ServiceModel } from "src/infrastructure";
import { RemoveServiceResponse } from "../response";

@Resolver(() => ServiceModel)
export class ServiceResolver {
  constructor(private readonly serviceUseCase: ServiceUseCase) {}

  @Query(() => ServiceModel)
  public getById(@Args('id') id: string) {
    return this.serviceUseCase.findOne(id);
  }

  @Query(() => [ServiceModel])
  public getAll() {
    return this.serviceUseCase.findAll();
  }

  @Mutation(() => ServiceModel)
  public create(@Args('createServiceInput') createServiceInput: CreateServiceInput) {
    return this.serviceUseCase.create(createServiceInput);
  }

  @Mutation(() => RemoveServiceResponse)
  public remove(@Args('id') id: string) {
    return this.serviceUseCase.remove(id);
  }

  @Mutation(() => ServiceModel)
  public update(
    @Args('id') id: string,
    @Args('updateServiceInput') updateServiceInput: UpdateServiceInput
  ) {
    return this.serviceUseCase.update(id, updateServiceInput);
  }
}