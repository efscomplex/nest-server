import { Injectable } from '@nestjs/common'
import { UserDto } from 'src/users/DTO/user.dto'
import { getUsers } from 'src/users/generators'

@Injectable()
export class UsersService {
  getUsers(): UserDto[] {
    return getUsers()
  }
}
