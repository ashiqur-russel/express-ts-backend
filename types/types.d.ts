import { IUser } from '../src/modules/user/user.model';

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}

export interface MongoError extends Error {
  code?: number;
  keyValue?: Record<string, any>;
  errmsg?: string;
  errors?: Record<string, any>;
}
