import { Request, Response } from 'express';
import { ListTypeUsersUseCase } from './listUserTypesUseCase';

export class ListUserTypesController {
  constructor(private listTypeUsersUseCase: ListTypeUsersUseCase) {}

  async handle(request: Request, response: Response) : Promise<Response> {
    try {
      const typeUsers = await this.listTypeUsersUseCase.execute();
      return response.status(200).send(typeUsers);
    } catch (error) {
      return response.status(500).send();
    }
  }
}
