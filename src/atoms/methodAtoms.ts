import { atomFamily } from 'recoil';

const methodRawData = atomFamily({
  key: 'methodRawData',
  default: '',
});

const currentFormTab = atomFamily({
  key: 'currentFormTab',
  default: 'Params',
});

const currentFieldParam = atomFamily({
  key: 'currentFieldValues',
  default: {},
});

const currentFieldRaw = atomFamily({
  key: 'currentFieldRaw',
  default: '',
});

export const methodState = {
  methodRawData,
  currentFieldParam,
  currentFieldRaw,
  currentFormTab,
};
