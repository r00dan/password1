import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { ServiceModel } from "src/infrastructure";
import { RemoveServiceResponse } from 'src/presentation/response';
import { CreateServiceInput, UpdateServiceInput } from "src/presentation/input";

@Injectable()
export class ServiceUseCase {
  constructor(
    @InjectRepository(ServiceModel)
    private readonly serviceRepository: Repository<ServiceModel>,
  ) {}

  public async create(input: CreateServiceInput) {
    const candidate = await this.serviceRepository.createQueryBuilder('service')
      .where('service.id = :id', { id: input.id })
      .orWhere('service.email = :email', { email: input.email })
      .andWhere('service.name = :name', { name: input.name })
      .getOne();

    if (!candidate) {
      const service = this.serviceRepository.create(input);
      await this.serviceRepository.save(service);
      return service;
    }
  }

  // TODO: should improve by replacing entity in another table
  public async remove(id: string): Promise<RemoveServiceResponse> {
    const candidate = await this.serviceRepository.findOne({ where: { id } });
    await this.serviceRepository.remove(candidate);
    return { id };
  }

  public async update(id: string, input: UpdateServiceInput) {
    const candidate = await this.serviceRepository.findOne({ where: { id } });
    if (candidate) {
      await this.serviceRepository.update({ id }, { ...input });
      return candidate;
    }
  }

  public async findOne(id: string) {
    const candidate = await this.serviceRepository.findOne({ where: { id } });
    if (candidate) {
      return candidate;
    }
  }

  public async findAll() {
    const candidates = await this.serviceRepository.find();
    if (candidates) {
      return candidates;
    }
  }
}