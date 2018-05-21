'use strict'
const env = {
  NODE_ENV: '"production"',
};

if (process.env.NODE_ENV === 'production') {
  env.CDN_URL = '"https://cdn.52yuwan.com"';
  env.WA_URL = '"//webanalytics.52yuwan.com/"';
  env.WEBAPP_URL = '//webapp.52yuwan.com';
  env.ADMINWS_URL = '"//adminws.52yuwan.com/blog_client_pack.php';
} else {
  env.CDN_URL = '"https://test-cdn.52yuwan.com"';
  env.WA_URL = '"//test-webanalytics.52yuwan.com/"';
  env.WEBAPP_URL = '"//test-webapp.52yuwan.com';
  env.ADMINWS_URL = '"//test-adminws.52yuwan.com/blog_client_pack.php';
}

module.exports = env;
