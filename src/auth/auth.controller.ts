import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credential.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
    ){}

    @Post('/signup')
    signUp(@Body() authCredentialsDto: AuthCredentialsDto) : Promise<void> {
        console.log("control is not a problem")
        return this.authService.signUp(authCredentialsDto);
    }
}
