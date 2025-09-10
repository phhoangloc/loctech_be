import { UserServices } from "./UserServices";
import { PageServices } from "./PageServices";
import { BlogServices } from "./BlogServices";
import { CategoryService } from "./CategoryServices";
import { NewsService } from "./NewsServices";
export class IUserService extends UserServices { }
export class IPageService extends PageServices { }
export class IBlogService extends BlogServices { }
export class ICategoryService extends CategoryService { }
export class INewsService extends NewsService { }
