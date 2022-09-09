import { Controller, Request, Get } from "@nestjs/common";
import { TwoFactorAuthenticationService } from "./two-factor-authentication.service";
@Controller("2fa")
export class TwoFactorAuthenticationController {
  // enable two factor authentication
  constructor(
    private twoFactorAuthenticationService: TwoFactorAuthenticationService
  ) {}
  @Get("enable")
  async enableTwoFactorAuthentication(@Request() req) {
    const user = req.user;
    const { id } = user;
    return this.twoFactorAuthenticationService.enableTwoFactorAuthentication(
      id
    );
  }
}
