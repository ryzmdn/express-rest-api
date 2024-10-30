const app = require('./src/app');
const logger = require('./src/config/logger');

app.listen(process.env.PORT, () => {
  logger.info(`Server is running on port ${process.env.PORT}`);
});