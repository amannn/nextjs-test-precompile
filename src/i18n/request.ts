import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async () => {
  const messages = (await import(`../../messages/en.json`)).default;
  console.log(messages);
  return {
    locale: 'en',
    messages
  };
});
