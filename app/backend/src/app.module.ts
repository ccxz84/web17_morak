import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import * as redisStore from 'cache-manager-redis-store';
import { getSecret } from 'vault';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: getSecret('REDIS_HOST'),
      port: getSecret('REDIS_PORT'),
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
