import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MoviesModule } from './movies/movies.module';
import { AuthModule } from './auth/auth.module';
import { dataSourceOptions } from 'db/data-source';
import 'dotenv/config';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    CacheModule.register({
      ttl: 60,
      max: 1000,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    MoviesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
    AppService,
  ],
})
export class AppModule {}
