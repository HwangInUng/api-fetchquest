import { IDataList, ISampleData } from "models";
import { atom, selector } from "recoil";
import { convertSampleData } from "utils";

const infoData = atom<IDataList>({
  key: "infoData",
  default: {
    params: [],
    responses: [],
  },
});

const sampleResponse = selector<ISampleData[]>({
  key: "sampleResponse",
  get: ({ get }) => {
    const responses = get(infoData).responses;

    if (!responses) return [];

    const convertedResponses = convertSampleData(responses);
    return convertedResponses;
  },
});

const sampleRequest = selector<ISampleData[]>({
  key: "sampleRequest",
  get: ({ get }) => {
    const params = get(infoData).params;
    if (!params) return [];

    const convertedParams = convertSampleData(params);
    return convertedParams;
  },
});

export const methodInfoState = {
  infoData,
  sampleResponse,
  sampleRequest,
};
