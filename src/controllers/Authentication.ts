import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import WrongCredentialsException from "../exceptions/WrongCredentialsException";
import DataStoredInToken from "../interfaces/dataStoredInToken";
import TokenData from "../interfaces/tokenData.interface";
import CreateUserDto from "../services/user/user.dto";
import User from "../services/user/user.interface";
import UserModel from "../services/user/user.model";
import AuthenticationService from "../services/authentication/authentication.service";
import LogInDto from "../services/authentication/logIn.dto";

class Authentication {
    public authenticationService = new AuthenticationService();
    private user = UserModel;
    
    constructor() {
        //this.loggingIn;
    }

    public loggingIn = async (logInData: LogInDto) => {
        const user = await this.user.findOne({
            where: { email: logInData.email}
        });
        return user;
    };
}

export default Authentication;