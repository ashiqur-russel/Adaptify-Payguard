import { IRoute } from "../types/route";

export const routeGenerator = (paths: IRoute[]): IRoute[] =>
  paths.map((path) => ({
    path: path.path,
    element: path.element,
    children: path.children ? routeGenerator(path.children) : undefined,
    name: path.name,
    icon: path.icon,
  }));
