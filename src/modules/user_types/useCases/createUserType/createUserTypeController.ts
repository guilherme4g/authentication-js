import { Request, Response } from 'express';
import { CreateUserTypeUseCase } from './createUserTypeUseCase';

class CreateUserTypeController {
  constructor(private createUserTypeUseCase: CreateUserTypeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name } = request.body;
      await this.createUserTypeUseCase.execute({ name });
      return response.status(201).send();
    } catch (error) {
      return response.status(500).send();
    }
  }
}
export { CreateUserTypeController };
