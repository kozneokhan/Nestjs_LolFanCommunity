import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TeamController } from './team.controller';
import { TeamService } from './team.service';
import { Team } from './entitys/team.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Team])],
  providers: [TeamService],
  controllers: [TeamController],
})
export class TeamModule {}
