import { render, screen } from '@testing-library/react';
import { Input } from './Input';

test('input render', () => {

  render(
    <Input
      id='testing'
      value='test'
      onChange={() => {}}
    />
  );

  screen.debug();

})