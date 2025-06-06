import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {

    @IsEmail()
    @IsString()
    email: string

    @IsString()
    @MinLength(6, { message: "Password must be atleast 6 character" })
    password: string
}
