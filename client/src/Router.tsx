import { RouteObject, useRoutes } from 'react-router-dom';
import { MainPage, PasswordsPage, GeneratePasswordPage } from 'pages';

export enum Routes {
  MAIN = '/',
  PASSWORDS = '/password',
  GENERATOR = '/passgen',
}

const routes: RouteObject[] = [
  {
    path: Routes.MAIN,
    element: <MainPage />,
  },
  {
    path: Routes.PASSWORDS,
    element: <PasswordsPage />,
  },
  {
    path: Routes.GENERATOR,
    element: <GeneratePasswordPage />,
  },
];

export function Router() {
  return useRoutes(routes);
}
