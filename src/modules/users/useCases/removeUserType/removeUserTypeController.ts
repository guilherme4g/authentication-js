import { Request, Response } from 'express';
import { RemoveUserTypeUseCase } from './removeUserTypeUseCase';

export class RemoveUserTypeController {
  constructor(private removeUserTypeUseCase: RemoveUserTypeUseCase) {}

  async handle(request: Request, response: Response) : Promise<Response> {
    try {
      const { id } = request.params;
      await this.removeUserTypeUseCase.execute(id);
      return response.status(204).send();
    } catch (error) {
      return response.status(500).send();
    }
  }
}
