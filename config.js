// Runtime configuration for local development and production deployments
(function () {
    const isLocal =
        window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1';

    window.APP_CONFIG = {
        apiUrl: isLocal
            ? 'http://localhost:8000'
            : '/api'
    };
})();
