import { atomFamily } from 'recoil';

const methodRawData = atomFamily({
  key: 'methodRawData',
  default: '',
});

export const methodTestState = {
  methodRawData,
};
