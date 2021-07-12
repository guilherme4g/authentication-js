import { getRepository, Repository } from "typeorm";
import { TypeUser } from "../../entities/typeUsers";
import { ITypeUsersRepository } from "../ITypeUsersRepository";

export class TypeUserRepository implements ITypeUsersRepository {

  private repository: Repository<TypeUser>;

  constructor() {
    this.repository = getRepository(TypeUser);
  }

  list(): Promise<TypeUser[]> {
    throw new Error("Method not implemented.");
  }
  create(typesUser: TypeUser): Promise<TypeUser> {
    throw new Error("Method not implemented.");
  }
  remove(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }

}