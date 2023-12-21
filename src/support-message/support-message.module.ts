import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SupportMessageService } from './support-message.service';
import SupportMessageController from './support-message.controller';
import { SupportMessage } from './entitys/support-message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SupportMessage])],
  providers: [SupportMessageService],
  controllers: [SupportMessageController],
})
export class SupportMessageModule {}
