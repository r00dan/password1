import { createElement } from 'react';

import { Passwords } from './Passwords';
import { useGetServicesQuery } from 'types';

export function PasswordsContainer() {
  const { data, loading } = useGetServicesQuery();
  return createElement(Passwords, {
    isLoading: loading,
    services: data,
  });
}
