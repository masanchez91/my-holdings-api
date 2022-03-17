import { IsOptional, IsString } from "class-validator";

class CreateUserDto {
    @IsString()
    firstName: string | undefined;

    @IsString()
    lastName: string | undefined;

    @IsString()
    email: string | undefined;

    @IsOptional()
    @IsString()
    mobile: string | undefined;

    @IsString()
    password: string | undefined;

}

export default CreateUserDto;