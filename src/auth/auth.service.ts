import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credential.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    console.log("service is not a problem");
    return this.createUser(authCredentialsDto);
  }

  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    console.log("repository is not a problem");
    const { username, password } = authCredentialsDto;
    const user = this.userRepository.create({ username, password });

    try{
      await this.userRepository.save(user);
    }catch(error){
      console.log(error);
      if (error.code === '23505' || error.errno === 1062) {
        // 23505 is PostgreSQL's unique violation error
        // 1062 is MySQL's duplicate entry error
        throw new ConflictException('Existing username');
      } else {
        throw new InternalServerErrorException();
      }
    }
    
  }
}
