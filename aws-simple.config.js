// @ts-check

/**
 * @type {import('aws-simple').AppConfig}
 */
exports.default = {
  appName: 'mywebapp',
  appVersion: 'latest',
  createStackConfig: () => ({
    minimumCompressionSizeInBytes: 1000,
    s3Configs: [
      {
        type: 'file',
        publicPath: '/',
        localPath: 'dist/app.html',
        bucketPath: 'app.html'
      },
      {
        type: 'file',
        publicPath: '/{proxy+}',
        localPath: 'dist/app.html',
        bucketPath: 'app.html'
      },
      {
        type: 'folder',
        publicPath: '/app',
        localPath: 'dist/app',
        responseHeaders: {
          cacheControl: `max-age=${5 * 365 * 24 * 60 * 60}` // 5 years
        }
      }
    ]
  })
};
