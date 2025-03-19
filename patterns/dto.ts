import { getValidUserData } from "../helpers/getEnvVariables.helper";

export interface IUserDTO {
  username: string;
  password: string;
}

export const userDTO: IUserDTO = {
  username: getValidUserData.validUserLogin,
  password: getValidUserData.validUserPassword,
};
