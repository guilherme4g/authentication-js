import { Request, Response } from 'express';
import { CreateTypeUserUseCase } from './createTypeUserUseCase';

class CreateTypeUserController {
  constructor(private createTypeUserUseCase: CreateTypeUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name } = request.body;
      await this.createTypeUserUseCase.execute({ name });
      return response.status(201).send();
    } catch (error) {
      console.log(error);
      return response.status(500).send();
    }
  }
}
export { CreateTypeUserController };
