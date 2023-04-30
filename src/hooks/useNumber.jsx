import { useState } from 'react';

export const useNumber = () => {
  const [number, setNumber] = useState(1872);
  const numberGrow = () => {
    const numberIncrease = () => {
      const scrolled = window.pageYOffset;
      let diff = 0;

      switch (true) {
        case scrolled < 1700:
          setNumber(1872);
          break;

        case scrolled >= 1700 && scrolled <= 3000:
          diff = Math.round(10 * ((scrolled - 1700) / 1300));
          setNumber(1872 + diff);
          break;

        case scrolled > 3000 && scrolled < 3300:
          setNumber(1882);
          break;

        case scrolled > 3300 && scrolled <= 4500:
          diff = Math.round(6 * ((scrolled - 3300) / 1200));
          setNumber(1882 + diff);
          break;

        case scrolled > 4600 && scrolled <= 5900:
          diff = Math.round(4 * ((scrolled - 4600) / 1300));
          setNumber(1888 + diff);
          break;

        case scrolled > 6500 && scrolled <= 9500:
          diff = Math.round(2 * ((scrolled - 6500) / 3000));
          setNumber(1900 + diff);
          break;

        case scrolled > 11500 && scrolled <= 13300:
          diff = Math.round(5 * ((scrolled - 11500) / 1800));
          setNumber(1904 + diff);
          break;

        case scrolled > 13300 && scrolled <= 14700:
          diff = Math.round(2 * ((scrolled - 13300) / 1700));
          setNumber(1909 + diff);
          break;

        case scrolled > 14800 && scrolled <= 22300:
          diff = Math.round(3 * ((scrolled - 14800) / 7500));
          setNumber(1911 + diff);
          break;

        case scrolled > 22400 && scrolled <= 28400:
          diff = Math.round(1 * ((scrolled - 22400) / 6000));
          setNumber(1923 + diff);
          break;

        case scrolled > 28400 && scrolled <= 30500:
          diff = Math.round(5 * ((scrolled - 28400) / 2100));
          setNumber(1924 + diff);
          break;

        case scrolled > 30500 && scrolled <= 32000:
          diff = Math.round(3 * ((scrolled - 30500) / 1500));
          setNumber(1929 + diff);
          break;

        case scrolled > 32000 && scrolled <= 35500:
          diff = Math.round(2 * ((scrolled - 32000) / 3500));
          setNumber(1932 + diff);
          break;

        case scrolled > 36000 && scrolled <= 39000:
          diff = Math.round(1 * ((scrolled - 36000) / 3000));
          setNumber(1935 + diff);
          break;

        case scrolled > 39500 && scrolled <= 41500:
          diff = Math.round(80 * ((scrolled - 39500) / 2000));
          setNumber(1936 + diff);
          break;

        default:
          break;
      }
    };

    window.addEventListener('scroll', numberIncrease);

    return () => {
      window.removeEventListener('scroll', numberIncrease);
    };
  };

  return [numberGrow, number];
};
