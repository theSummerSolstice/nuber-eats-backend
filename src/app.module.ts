import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true, // schema 파일을 만드는데 직접 가지고 있지 않음을 의미
    }),
    RestaurantsModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
