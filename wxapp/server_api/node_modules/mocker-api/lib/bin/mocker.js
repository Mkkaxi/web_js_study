#!/usr/bin/env node
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _path = _interopRequireDefault(require("path"));

var _prepareUrls = _interopRequireDefault(require("local-ip-url/prepareUrls"));

var _detectPort = _interopRequireDefault(require("detect-port"));

var _safe = _interopRequireDefault(require("colors-cli/safe"));

var _express = _interopRequireDefault(require("express"));

var _ = _interopRequireDefault(require("../"));

(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var mockpath, HOST, DEFAULT_PORT, PORT, app;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (process.argv.slice(2).length) {
            _context.next = 4;
            break;
          }

          console.log(_safe["default"].red('Error: Need to pass parameters!'));
          console.log("E.g: ".concat(_safe["default"].yellow('mocker <File path>'), "\n"));
          return _context.abrupt("return");

        case 4:
          mockpath = process.argv[2];
          mockpath = require.resolve(_path["default"].resolve(mockpath));
          HOST = process.env.HOST || '0.0.0.0';
          DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3721;
          _context.next = 10;
          return (0, _detectPort["default"])(DEFAULT_PORT);

        case 10:
          PORT = _context.sent;

          if (DEFAULT_PORT !== PORT) {
            DEFAULT_PORT = PORT;
          }

          process.env.PORT = String(DEFAULT_PORT);
          app = (0, _express["default"])();
          app.all('/*', function (req, res, next) {
            console.log("".concat(_safe["default"].green(req.method), " - ").concat(req.url));
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With');
            res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
            next();
          });
          (0, _["default"])(app, mockpath);
          app.listen(DEFAULT_PORT, function () {
            var localIpUrl = (0, _prepareUrls["default"])({
              protocol: 'http',
              host: HOST,
              port: DEFAULT_PORT
            });
            console.log("> Server Listening at Local: ".concat(_safe["default"].green(localIpUrl.localUrl)));
            console.log(">           On Your Network: ".concat(_safe["default"].green(localIpUrl.lanUrl), "\n"));
          });
          /**
           * Event listener for HTTP server "error" event.
           */

          app.on('error', function (error) {
            if (error.syscall !== 'listen') {
              throw error;
            }

            var bind = typeof PORT === 'string' ? 'Pipe ' + PORT : 'Port ' + PORT; // handle specific listen errors with friendly messages

            switch (error.code) {
              case 'EACCES':
                console.error("".concat(bind, " requires elevated privileges")); // eslint-disable-line

                process.exit(1);
                break;

              case 'EADDRINUSE':
                console.error("".concat(bind, " is already in use")); // eslint-disable-line

                process.exit(1);
                break;

              default:
                throw error;
            }
          });

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))(); 
//# sourceMappingURL=mocker.js.map