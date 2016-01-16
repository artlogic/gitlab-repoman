'use strict';

var config = {
  "development": {
    "username": "root",
    "password": null,
    "database": "repoman_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "repoman_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "repoman_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
};

module.exports = config;
