export default () => ({
    cors: {
      whitelistUrls: process.env.CORS_WHITELIST_URLS
        ? process.env.CORS_WHITELIST_URLS.split(',')
        : [],
    },
    swagger: {
        apiName: process.env.SWAGGER_API_NAME || 'My API',
        apiDescription: process.env.SWAGGER_API_DESCRIPTION || 'API Documentation',
        apiCurrentVersion: process.env.SWAGGER_API_CURRENT_VERSION || '1.0',
        apiRoot: process.env.SWAGGER_API_ROOT || 'api-docs', 
      },
    jwt: {
        accessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET || '',
        accessTokenExpiry: process.env.JWT_ACCESS_TOKEN_EXPIRY || '1h', 
    },
});