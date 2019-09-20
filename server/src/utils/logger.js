const { createLogger, transports, format } = require("winston");
const { combine, printf, timestamp } = format;
require("winston-daily-rotate-file");

var transport = new transports.DailyRotateFile({
  filename: "log_%DATE%.txt",
  datePattern: "YYYY-MM-DD",
  dirname: "src/logs",
  maxSize: "50m",
  maxFiles: "15d"
});

const loggerLib = createLogger({
  format: combine(
    timestamp(),
    printf(({ level, message, timestamp }) => {
      return `[${timestamp}] [${level}] ${message}`;
    })
  ),
  transports: [transport]
});

const logger = (function() {
  return {
    debug: function(message) {
      loggerLib.debug(message);
    },
    error: function(message) {
      loggerLib.error(message);
    },
    info: function(message) {
      loggerLib.info(message);
    },
    warn: function(message) {
      loggerLib.warn(message);
    }
  };
})();

export default logger;
