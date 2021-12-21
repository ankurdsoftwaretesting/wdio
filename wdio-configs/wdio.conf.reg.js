const { config } = require('./wdio.conf');

config.exclude = ['./features/sanity/*.feature']

exports.config = config;
