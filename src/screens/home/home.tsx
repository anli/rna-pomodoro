import {StackNavigationOptions} from '@react-navigation/stack';
import React from 'react';
import {Button} from 'react-native-paper';
import styled from 'styled-components/native';
import {secondsToHms} from './seconds-to-hms';
import useCountdown from './use-countdown';

const POMODORO_SECONDS = 1500;

const Component = () => {
  const {time, start, reset, status} = useCountdown(POMODORO_SECONDS);

  return (
    <Screen testID="HomeScreen">
      <Body>
        <Time>{secondsToHms(time)}</Time>
      </Body>
      <Footer>
        <Buttons>
          {status === 'READY' && (
            <StartButton mode="contained" onPress={start}>
              Start
            </StartButton>
          )}
          {(status === 'COMPLETED' || status === 'RUNNING') && (
            <ResetButton mode="outlined" onPress={reset}>
              Reset
            </ResetButton>
          )}
        </Buttons>
      </Footer>
    </Screen>
  );
};

const options = {
  headerShown: false,
};

export default class HomeScreen {
  static Component: () => JSX.Element = Component;
  static options: StackNavigationOptions = options;
}

const Screen = styled.SafeAreaView`
  flex: 1;
`;

const Body = styled.View`
  flex: 1;
  justify-content: center;
`;

const Footer = styled.View``;

const Buttons = styled.View`
  flex-direction: row;
  margin: 24px 24px 24px 24px;
`;

const StartButton = styled(Button)`
  flex: 1;
`;

const Time = styled.Text`
  text-align: center;
  font-size: 96px;
`;

const ResetButton = styled(Button)`
  flex: 1;
`;
