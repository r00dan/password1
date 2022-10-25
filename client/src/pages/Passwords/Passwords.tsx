import { Block, Layout } from "components";
import { GetServicesQueryReturnData } from "types";

import style from './Passwords.module.scss';

interface IPasswordsProps {
  isLoading: boolean;
  services?: GetServicesQueryReturnData;
}

export function Passwords({
  isLoading,
  services
}: IPasswordsProps) {
  return (
    <Layout>
      <div className={style.root}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {services?.getAll.map(({ id, name, email }) => (
              <div key={id}>
                <h1>{name}</h1>
                <div>{email}</div>
              </div>
            ))}
          </>
        )}
      </div>
    </Layout>
  );
}
