import {PostgresSQLFileRepository} from './fileRepository'
import { PostgresSQLFolderRepository } from './folderRepository';


export type IRepositories = {
  fileRepository: PostgresSQLFileRepository,
  folderRepository: PostgresSQLFolderRepository;
}
