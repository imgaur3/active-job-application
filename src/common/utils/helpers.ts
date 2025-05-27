import { get } from 'lodash';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const errorMessageHandler = (err: any) => {
  return get(err, 'response.data.message') || get(err, 'message');
};

const firstLetterCapitalise = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
};

export { errorMessageHandler, firstLetterCapitalise };
