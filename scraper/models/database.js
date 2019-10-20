const databaseConfig = require('./config')

mongoose.connect(databaseConfig.uri, {
    useCreateIndex: true,
    useNewUrlParser: true
  });