const fs = require('fs');
const path = require('path');
const LOG_FILE = path.join(__dirname, '../data/logs.json');

const readLogs = () => {
  const data = fs.readFileSync(LOG_FILE);
  return JSON.parse(data);
};

const writeLogs = (logs) => {
  fs.writeFileSync(LOG_FILE, JSON.stringify(logs, null, 2));
};

module.exports = { readLogs, writeLogs };
