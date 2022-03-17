import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import UserWithThatEmailAlreadyExistsException from "../../exceptions/UserWithThatEmailAlreadyExistsException";
import DataStoredInToken from "../../interfaces/dataStoredInToken";
import TokenData from "../../interfaces/tokenData.interface";
import CreateUserDto from "../user/user.dto";
import User from "../user/user.interface";
import userModel from "../user/user.model";

class AuthenticationService {

}

export default AuthenticationService;