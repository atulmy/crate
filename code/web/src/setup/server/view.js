const index = (APP_URL, helmet = {}, appHtml = '', styles = '', initialState = {}) => (
  `<!doctype html>
<html lang="en">
<head>
    <!-- Meta -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    ${ helmet.title.toString() }
    ${ helmet.meta.toString() }
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="${ APP_URL }/images/favicon/favicon.ico" />
    <link rel="icon" type="image/png" sizes="16x16" href="${ APP_URL }/images/favicon/favicon-16x16.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="${ APP_URL }/images/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="${ APP_URL }/images/favicon/favicon-96x96.png" />
    
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
    </style>
</head>
<body>
    <!-- App -->
    <main id="app">${ appHtml }</main>
    
    <!-- Initial State -->
    <script>
        window.__INITIAL_STATE__ = ${ JSON.stringify(initialState) }
    </script>
    
    <!-- JS Bundle -->
    <script type="text/javascript" src="${ APP_URL }/js/bundle.js?${ Math.random() }"></script>
</body>
</html>`
)

export default index