import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  experimental: {
    messages: {
      format: 'json',
      locales: 'infer',
      path: './messages',
      precompile: true
    }
  }
});

const nextConfig = {
  /* config options here */
};

const result = withNextIntl(nextConfig);

console.log(result);
export default result;
