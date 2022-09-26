import {IsEmail, IsNotEmpty, IsString, IsOptional, IsBoolean} from 'class-validator';

export class UserDto {

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    username?: string
    
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    avatatUrl?: string

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    customName?: string

    @IsOptional()
    @IsEmail()
    email?: string
    
    @IsOptional()
    @IsBoolean()
    isTwoFactorAuthenticationEnabled?: boolean
  
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    twoFactorAuthenticationCode?: String
}