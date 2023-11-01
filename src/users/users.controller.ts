import { Controller, Get } from "@nestjs/common";
import { Req, UseGuards } from "@nestjs/common/decorators";
import { User } from "@prisma/client";
import { GetUser } from "src/auth/decorator";
import { JwtGuard } from '../auth/guard'

@Controller('users')
export class UsersController {
  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@GetUser('') user: User) {
    return user;
  }
}