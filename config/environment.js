/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'kod-polex',
    environment: environment,
    baseURL: '/http://localhost:4200/https://github.com/dominika35/dominika35.github.io/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      facebookId: 144856945853151
    },
    contentSecurityPolicy: {
      'font-src': "'self' 'unsafe-inline' 'unsafe-eval' csi.gstatic.com maps.googleapis.com maps.gstatic.com fonts.gstatic.com *.googleapis.com",
      'connect-src': "'self' ",
      'style-src': "'self' 'unsafe-inline' 'unsafe-eval' fonts.googleapis.com csi.gstatic.com maps.googleapis.com maps.gstatic.com *.googleapis.com",
      'img-src': "'self' 'unsafe-inline' 'unsafe-eval' csi.gstatic.com maps.googleapis.com maps.gstatic.com mt0.googleapis.com *.googleapis.com",
      'frame-src': "'self' csi.gstatic.com *.googleapis.com",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' use.typekit.net maps.googleapis.com maps.gstatic.com mt0.googleapis.com *.googleapis.com"
    }

  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
