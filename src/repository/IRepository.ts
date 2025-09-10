import { UserRepository } from "./UserRepository";
import { PageRepository } from "./PageRepository";
import { BlogRepository } from "./BlogRepository";
import { CategoryRepository } from "./CategoryRepository";
import { NewsRepository } from "./NewsRepository";
export class IUserRepository extends UserRepository { }
export class IPageRepository extends PageRepository { }
export class IBlogRepository extends BlogRepository { }
export class ICategoryRepository extends CategoryRepository { }
export class INewsRepository extends NewsRepository { }