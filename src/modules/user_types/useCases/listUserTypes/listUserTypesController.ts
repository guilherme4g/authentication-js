import { Request, Response } from 'express';
import { ListTypeUsersUseCase } from './listUserTypesUseCase';

export class ListUserTypesController {
  constructor(private listTypeUsersUseCase: ListTypeUsersUseCase) {}

  async handle(_: Request, response: Response) : Promise<Response> {
    const typeUsers = await this.listTypeUsersUseCase.execute();
    return response.status(200).send(typeUsers);
  }
}
