import {fireEvent, render, waitFor} from '@testing-library/react-native';
import React from 'react';
import HomeScreen from './home';

describe('Home Screen', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it(`Scenario: See Home Screen
      Given any
      When I am at Home Screen
      Then I should see 'Start Button'
      And I should see '25:00'`, () => {
    const {getByText} = render(<HomeScreen.Component />);
    expect(getByText('Start')).toBeDefined();
    expect(getByText('25:00')).toBeDefined();
  });

  it(`Scenario: Start pomodoro countdown
      Given I am at Home Screen
      When I press 'Start Button'
      Then I should not see 'Start Button'
      And I should see 'Reset Button'`, async () => {
    const {queryByText, getByText} = render(<HomeScreen.Component />);

    expect(getByText('Start')).toBeDefined();
    fireEvent.press(getByText('Start'));
    waitFor(() => expect(queryByText('Start')).toBeNull());

    expect(queryByText('Start')).toBeNull();
    expect(getByText('Reset')).toBeDefined();
  });

  it(`Scenario: Reset pomodoro countdown
      Given I am at Home Screen
      And Countdown is 'Running'
      When I press 'Reset Button'
      Then I should see 'Start Button'
      And I should see '25:00'`, async () => {
    const {queryByText, getByText} = render(<HomeScreen.Component />);
    expect(getByText('Start')).toBeDefined();
    fireEvent.press(getByText('Start'));
    waitFor(() => expect(queryByText('Start')).toBeNull());

    expect(getByText('Reset')).toBeDefined();
    fireEvent.press(getByText('Reset'));
    waitFor(() => expect(getByText('Start')).toBeDefined());

    expect(getByText('Start')).toBeDefined();
    expect(getByText('25:00')).toBeDefined();
  });
});
