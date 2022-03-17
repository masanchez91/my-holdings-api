/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */

import { plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { RequestHandler } from "express";
import HttpException from "../exceptions/HttpException";

function validationMiddleware<T>(type: any, skipMissingProperties = false): RequestHandler {
    return (req, res, next) => {
      console.log(req.body, "<<<");
      
      validate(plainToClass(type, req.body), { skipMissingProperties })
        .then((errors: ValidationError[]) => {
          console.log(errors);
          
          if (errors.length > 0) {
            const message = errors.map((error: ValidationError) => Object.values(error)).join(", ");
            next(new HttpException(400, message));
          } else {
            next();
          }
        });
    };
  }
  
  export default validationMiddleware;