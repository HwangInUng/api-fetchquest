// layout property
export const SIDE_METHOD_COLOR: { [key: string]: string } = {
  get: '#3559E0',
  post: '#527853',
  put: '#994D1C',
  delete: '#B31312',
};

// response property
export const ERROR_CODE_TEXT: {
  [key: number]: { text: string; isError: boolean };
} = {
  200: { text: '200: Ok', isError: false },
  400: { text: '400: Bad Request', isError: true },
  401: { text: '401: Unauthorized', isError: true },
  403: { text: '403: Forbidden', isError: true },
  404: { text: '404: Not Found', isError: true },
  405: { text: '405: Method Not Allowed', isError: true },
};

// test property
export const METHOD_TYPE_BUTTONS: { name: string; color: string }[] = [
  { name: 'GET', color: 'text-blue-400' },
  { name: 'POST', color: 'text-green-400' },
  { name: 'PUT', color: 'text-red-400' },
  { name: 'DELETE', color: 'text-purple-400' },
];

export const TEST_FORM_TABS: string[] = ['Params', 'Raw'];
