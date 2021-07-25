import { Request, Response } from 'express';
import { CreateUserUseCase } from './createUserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
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
    } catch (error) {
      console.log(error);
      return response.status(500).send();
    }
  }
}
export { CreateUserController };
