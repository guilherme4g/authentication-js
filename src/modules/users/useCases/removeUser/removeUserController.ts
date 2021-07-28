import { Request, Response } from 'express';
import { RemoveUserUseCase } from './removeUserUseCase';

class RemoveUserController {
  constructor(private removeUserUseCase: RemoveUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const users = await this.removeUserUseCase.execute(id);
      return response.status(200).send(users);
    } catch (error) {
      return response.status(500).send();
    }
  }
}
export { RemoveUserController };
