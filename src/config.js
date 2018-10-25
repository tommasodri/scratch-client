const dev = {
  s3: {
    REGION: "eu-west-1",
    BUCKET: "scratch-api-dev-serverlessdeploymentbucket-t58bxatv6byw"
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://bw5iu5lce7.execute-api.eu-west-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_S1qpukGcI",
    APP_CLIENT_ID: "57bma87bq1in5s696gskvj4phv",
    IDENTITY_POOL_ID: "eu-west-1:d551e3e0-f721-4288-ac82-fcb40608b734"
  },
  STRIPE_KEY: "pk_test_KMgHzKY8SJ2qWaqxObeYLZY2"
};

const prod = {
  s3: {
    REGION: "eu-west-1",
    BUCKET: "scratch-api-prod-serverlessdeploymentbucket-cbhus8jmf8yc"
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://4ivmgcn078.execute-api.eu-west-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_UYjGNi8TT",
    APP_CLIENT_ID: "421gjosmihpmeiin6hv5l9p3jv",
    IDENTITY_POOL_ID: "eu-west-1:5dee165e-fe8f-4b6d-a115-1b4eb570d00c"
  },
  STRIPE_KEY: "pk_test_KMgHzKY8SJ2qWaqxObeYLZY2"
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};