import { join } from 'path';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ServiceModel } from 'src/infrastructure';
import { ServiceUseCase } from 'src/domain';
import { ServiceResolver } from 'src/presentation/resolver';

const entities = [ServiceModel];
const domains = [ServiceUseCase];
const resolvers = [ServiceResolver];

const providers = [...entities, ...resolvers, ...domains];

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database',
      entities,
      synchronize: true,
    }),
    TypeOrmModule.forFeature(entities),
  ],
  providers,
})
export class AppModule {}
