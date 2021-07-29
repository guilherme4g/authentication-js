import { Request, Response } from 'express';
import { CreateUserUseCase } from './createUserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      password,
      typeUser,
    } = request.body;

    await this.createUserUseCase.execute({
      name,
      email,
      password,
      typeUser,
    });

    return response.status(201).send();
  }
}
export { CreateUserController };
