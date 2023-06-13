export default {
  strategies: {
    google: {
      responseType: 'id_token token',
      codeChallengeMethod: '',
      scope: 'openid profile email',
      clientId:
        'some_google_clientId',
      clientSecret: 'some_google_clientSecret',
    },
  },
  redirect: {
    login: '/verification',
    logout: '/verification',
    callback: '/verification',
    home: '/',
  },
}
