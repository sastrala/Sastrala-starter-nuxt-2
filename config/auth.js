export default {
  strategies: {
    google: {
      responseType: 'id_token token',
      codeChallengeMethod: '',
      scope: 'openid profile email',
      clientId:
        '694542181812-6rjf436tb9senvtdecovbjahv3lkdun4.apps.googleusercontent.com',
      clientSecret: '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',
    },
  },
  redirect: {
    login: '/verification',
    logout: '/verification',
    callback: '/verification',
    home: '/',
  },
}
