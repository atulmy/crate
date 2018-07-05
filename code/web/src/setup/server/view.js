const index = (APP_URL, NODE_ENV, helmet = null, appHtml = '', styles = '', initialState = {}) => (
`<!doctype html>
<html lang="en">
<head>
    <!-- Meta -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="theme-color" content="#7367F0">
    ${ helmet ? helmet.title.toString()+' '+helmet.meta.toString() : '' }
  
    <link rel="manifest" href="/manifest.json">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="#7367F0">
    <meta name="apple-mobile-web-app-title" content="Crate">
    <meta name="msapplication-TileColor" content="#2F3BA2">
    <link rel="canonical" href="${ APP_URL }">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="${ APP_URL }/images/favicon/favicon.ico" />
    <link rel="icon" type="image/png" sizes="16x16" href="${ APP_URL }/images/favicon/favicon-16x16.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="${ APP_URL }/images/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="${ APP_URL }/images/favicon/favicon-96x96.png" />
    <link rel="apple-touch-icon" href="${ APP_URL }/mages/icons/icon-152x152.png">
    <meta name="msapplication-TileImage" content="${ APP_URL }/images/icons/icon-144x144.png">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    
    <!-- CSS - Reset -->
    <link href="${ APP_URL }/css/reset.css" rel="stylesheet" />
    
    <!-- CSS - Common -->
    <link href="${ APP_URL }/css/common.css" rel="stylesheet" />
    
    <!-- CSS - Generated -->
    ${ styles }
</head>
<body>
    <!-- App -->
    <main id="app">${ appHtml }</main>
    
    <!-- Initial State -->
    <script>
        window.__INITIAL_STATE__ = ${ JSON.stringify(initialState) }
    </script>
    
    <!-- JS Bundle -->
    <script type="text/javascript" src="${ APP_URL }/js/bundles/vendor.js"></script>
    <script type="text/javascript" src="${ APP_URL }/js/bundles/app.js${ NODE_ENV !== 'production' ? ('?'+Math.random()) : '' }"></script>
    <script>
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker
          .register('${ APP_URL }/js/service-worker.js')
          .then(function() { console.log('Service Worker Registered') })
      }
    </script>
</body>
</html>`
)

export default index
