import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UserInfo } from '../utils/userInfo.decorator';

import { SupportMessageService } from './support-message.service';
import { SupportMessageDto } from './entitys/dto/support-message.dto';
import { User } from 'src/user/types/user.entity';

@UseGuards(AuthGuard('jwt'))
@Controller('support-message')
export default class SupportMessageController {
  constructor(private readonly supportMessageService: SupportMessageService) {}

  @Get(':teamId')
  async getAllMessages(@Param('teamId') teamId: number) {
    return await this.supportMessageService.getMessagesByTeamId(teamId);
  }

  @Post(':teamId')
  async createMessage(
    @UserInfo() user: User,
    @Param('teamId') teamId: number,
    @Body() supportMessageDto: SupportMessageDto,
  ) {
    await this.supportMessageService.createMessage(
      teamId,
      user.id,
      supportMessageDto.message,
    );
  }

  @Patch(':id')
  async updateMessage(
    @UserInfo() user: User,
    @Param('id') id: number,
    @Body() supportMessageDto: SupportMessageDto,
  ) {
    await this.supportMessageService.updateMessage(
      id,
      user.id,
      supportMessageDto.message,
    );
  }

  @Delete(':id')
  async deleteMessage(@UserInfo() user: User, @Param('id') id: number) {
    await this.supportMessageService.deleteMessage(id, user.id);
  }
}
