import { Request, Response } from 'express';
import { IRepositories } from '../repositories/postgresql/types';

export interface IRequest extends Request {
  repositories: IRepositories
}

export interface IResponse extends Response {}