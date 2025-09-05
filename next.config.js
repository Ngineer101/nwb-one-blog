const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
  },
  async redirects() {
    return [
      {
        source: '/blog/auditing-dotnet-entity-framework-core',
        destination: 'https://minimalizt.dev/blog/auditing-dotnet-entity-framework-core/',
        permanent: true,
      },
      {
        source: '/blog/difference-between-datetime-now-utcnow',
        destination: 'https://minimalizt.dev/blog/difference-between-datetime-now-utcnow/',
        permanent: true,
      },
      {
        source: '/blog/entity-framework-query-filters-per-request-configuration',
        destination:
          'https://minimalizt.dev/blog/entity-framework-query-filters-per-request-configuration/',
        permanent: true,
      },
      {
        source: '/blog/exception-filter-attribute-dotnet',
        destination: 'https://minimalizt.dev/blog/exception-filter-attribute-dotnet/',
        permanent: true,
      },
      {
        source: '/blog/linq-extensions-pagination-order-by-property-name',
        destination:
          'https://minimalizt.dev/blog/linq-extensions-pagination-order-by-property-name/',
        permanent: true,
      },
      {
        source: '/blog/openid-connect-dotnet-5',
        destination: 'https://minimalizt.dev/blog/openid-connect-dotnet-5/',
        permanent: true,
      },
      {
        source: '/blog/set-up-automapper-dotnet-core',
        destination: 'https://minimalizt.dev/blog/set-up-automapper-dotnet-core/',
        permanent: true,
      },
      {
        source: '/blog/swagger-api-versioning-dotnet-core',
        destination: 'https://minimalizt.dev/blog/swagger-api-versioning-dotnet-core/',
        permanent: true,
      },
    ]
  },
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    if (!dev && !isServer) {
      // Replace React with Preact only in client production build
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }

    return config
  },
})
