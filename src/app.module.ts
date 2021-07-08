import { Module, Global } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { DatabaseModule } from './config/database.module';

@Global()
@Module({
  imports: [],
  controllers: [AppController, UsersController],
  providers: [DatabaseModule, AppService, UsersService],
  exports: [DatabaseModule],
})
export class AppModule {}
