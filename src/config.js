export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "eu-west-1",
    BUCKET: "notes-app-uploads-archeido"
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://4dby04hma3.execute-api.eu-west-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_kDHOwb12w",
    APP_CLIENT_ID: "2852rjuj0hse88qsuudi7mesa2",
    IDENTITY_POOL_ID: "eu-west-1:f0ef8195-3956-4b32-9df2-b9f9a082961d"
  }
};