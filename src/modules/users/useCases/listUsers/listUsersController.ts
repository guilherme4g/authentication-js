import { Request, Response } from 'express';
import { ListUsersUseCase } from './listUsersUseCase';

class ListUserController {
  constructor(private listUsersUseCase: ListUsersUseCase) {}

  async handle(_: Request, response: Response): Promise<Response> {
    const users = await this.listUsersUseCase.execute();
    return response.status(200).send(users);
  }
}
export { ListUserController };
