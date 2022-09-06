import {
  Controller,
  Get,
  Param,
  Post,
  Request,
  Body,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { UserService } from "./user.service";
import { v4 as uuidv4 } from "uuid";
import * as path from "path";
import { diskStorage } from "multer";
import { Public } from "../auth/common/decorators";

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

@Controller("user")
export class UserController {
  constructor(private userservice: UserService) {}

  @Get()
  async getUsers() {
    return this.userservice.getUsers();
  }
  @Public()
  @Post('formdata')
  @UseInterceptors(FileInterceptor('<name of file here - asdasd in your screenshot>'))
  signup(@UploadedFile() file, @Body() body) {
  console.log(file);
  console.log(body);
}

  @Get(":id")
  async getUser(@Param("id") id: number) {
    return this.userservice.getUser(id);
  }

  @Post("upload")
  @UseInterceptors(FileInterceptor("file", storage))
  async upload(@UploadedFile() file, @Request() req): Promise<any> {
    const user = req.user;
    return this.userservice.upload(file, user);
  }
ß
  @Post("block/:id")
  async block(@Param('id') id: number,  @Request() req): Promise<any> {
    // need to get the id of the current user
    const user = req.user;
    if (this.userservice.addBlock(id, user))
      return;
    return ; // change the return stat with the appropriate status code
    // if something happned in the data base then write some logs.ß
  }

  @Post("unblock/:id")
  async unblock(@Param('id') id: number,  @Request() req): Promise<any> {
    // need to get the id of the current user
    const user = req.user;
    if (this.userservice.delBlock(id, user))
      return;
    return ; // change the return stat with the appropriate status code
    // if something happned in the data base then write some logs.ß
  }
}
