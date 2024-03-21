//-----------------------------------------
// Якби ми хотіли призначати middleware самостійно, нам би довелося описати клас middleware, а потім призначити його вручну для відповідного запиту.
//-----------------------------------------
import type { NextFunction, Request, Response } from "express";
import type { ExpressMiddlewareInterface } from "routing-controllers";

export class HTTPResponseLogger implements ExpressMiddlewareInterface {
  use(request: Request, response: Response, next: NextFunction) {
    const { originalUrl, method } = request;

    const { statusCode } = response;

    console.log(
      `Response request: method=${method} path=${originalUrl} statusCode=${statusCode}`
    );

    next();
  }
}