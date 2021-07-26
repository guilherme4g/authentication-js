import { Request, Response } from 'express';
import { ListUsersUseCase } from './listUsersUseCase';

class ListUserController {
  constructor(private listUsersUseCase: ListUsersUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const users = await this.listUsersUseCase.execute();
      return response.status(200).send(users);
    } catch (error) {
      return response.status(500).send();
    }
  }
}
export { ListUserController };
