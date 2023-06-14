import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  id: 1,
  name: 'John Doe',
  email: 'john@email.com',
  phone: '88988888888',
  cpf: '123456789',
  password: 'largePassword',
  typeUser: UserType.User,
  createdAt: new Date(),
  updatedAt: new Date(),
};
