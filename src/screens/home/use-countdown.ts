import {useState} from 'react';

const useCountdown = (second: number) => {
  const [time, setTime] = useState<number>(second);
  const [ticker, setTicker] = useState<NodeJS.Timeout | undefined>(undefined);
  const [status, setStatus] = useState<
    'RUNNING' | 'COMPLETED' | 'PAUSED' | 'READY'
  >('READY');

  const start = () => {
    setStatus('RUNNING');
    setTime(second);
    const endTime = new Date();
    endTime.setSeconds(endTime.getSeconds() + second);

    const interval = setInterval(() => {
      const diff = secondsDiff(Date.now(), endTime.getTime());
      setTime(diff);

      /* istanbul ignore next */
      if (diff <= 0) {
        setStatus('COMPLETED');
        setTicker(undefined);
        clearInterval(interval);
        setTime(0);
      }
    }, 300);
    setTicker(interval);
  };

  const reset = () => {
    setStatus('READY');
    ticker && clearInterval(ticker);
    setTime(second);
  };

  return {time, start, reset, status};
};

export default useCountdown;

const secondsDiff = (d1: number, d2: number) => {
  return Math.floor((d2 - d1) / 1000);
};
