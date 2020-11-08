import {render, waitFor} from '@testing-library/react-native';
import React from 'react';
import App from './app';

describe('App', () => {
  it(`Scenario: Can see Home Screen on App load
      Given any
      When App load
      Then I should see 'Home Screen'`, async () => {
    const {getByTestId} = render(<App />);
    await waitFor(() => expect(getByTestId('HomeScreen')).toBeDefined());

    expect(getByTestId('HomeScreen')).toBeDefined();
  });
});
