import { DataTypes } from "sequelize";
import db from "../../database/mysql/connection";
import User from "./user.interface";

const UserModel = db.define("users", {
    name: {
        type: DataTypes.STRING,
    },
});

export default UserModel;
