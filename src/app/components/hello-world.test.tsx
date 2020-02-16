import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {HelloWorld} from './hello-world';

describe('<HelloWorld />', () => {
  test('greetings to the world', () => {
    render(<HelloWorld />);

    expect(() => screen.getByText('Hello, World!')).not.toThrowError();
  });
});
