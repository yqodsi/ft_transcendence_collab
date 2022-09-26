import {
  Controller,
  Get,
  Post,
  Request,
  Body,
  UploadedFile,
  UseInterceptors,
  Query,
  ParseIntPipe,
  Delete,
  Req,
  Patch,
  UseGuards,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { UserService } from "./user.service";
import { v4 as uuidv4 } from "uuid";
import * as path from "path";
import { diskStorage } from "multer";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { UserDto } from "./dtos/user.dto";

export const storage = {
  storage: diskStorage({
    destination: "./uploads/",
    filename: (req, file, cb) => {
      const filename: string =
        path.parse(file.originalname).name.replace(/\s/g, "") + uuidv4();
      const extention: string = path.parse(file.originalname).ext;
      cb(null, `${filename}${extention}`);
    },
  }),
};

@UseGuards(JwtAuthGuard)
@Controller("user")
export class UserController {
  constructor(private userservice: UserService) { }

  @Patch('update')
  async updateUser(@Req() { user }, @Body() payload: UserDto) {
    this.userservice.updateUser(user.id, payload);
  }

  @Get('get')
  async getUser(@Query('id', ParseIntPipe) id: number) {
    return this.userservice.getUser(id);
  };

  @Get('find')
  async findUser(@Query('username') username: string) {
    return this.userservice.findUser(username);
  }

  @Post('block')
  async blockUser(@Query('id', ParseIntPipe) id: number, @Req() { user }) {
    return this.userservice.blockUser(user.id, id);
  };

  @Delete('block')
  async unblockUser(@Query('id', ParseIntPipe) id: number, @Req() { user }) {
    return this.userservice.unblockUser(user.id, id);
  };

  @Get('block')
  async getBlokedUsers(@Req() { user }) {
    return this.userservice.getBlockedUsers(user.id);
  }

  @Post('friend')
  async addFriend(@Query('id', ParseIntPipe) id: number, @Req() { user }) {
    return this.userservice.addFriend(user.id, id);
  }

  @Delete('friend')
  async removeFriend(@Query('id', ParseIntPipe) id: number, @Req() { user }) {
    return this.userservice.removeFriend(user.id, id);
  }

  @Patch('friend')
  async acceptFriend(@Query('id', ParseIntPipe) id: number, @Req() { user }) {
    return this.userservice.acceptFriend(user.id, id);
  }

  @Post("upload")
  @UseInterceptors(FileInterceptor("file", storage))
  async upload(@UploadedFile() file, @Request() req): Promise<any> {
    const user = req.user;
    return this.userservice.upload(file, user);
  }

  @Post("changeusername")
  // prisma update username
  async changeUsername(@Body() body, @Request() req): Promise<any> {
    const user = req.user;
    return this.userservice.changeUsername(body, user);
  }
}
