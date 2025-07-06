const { readLogs, writeLogs } = require('../utils/fileHandler');

const ingestLog = (req, res) => {
  const { level, message, resourceId, timestamp, traceId, spanId, commit, metadata } = req.body;
  if (!level || !message || !resourceId || !timestamp || !traceId || !spanId || !commit || !metadata) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const logs = readLogs();
  const newLog = { level, message, resourceId, timestamp, traceId, spanId, commit, metadata };
  logs.push(newLog);
  writeLogs(logs);

  res.status(201).json(newLog);
};

const getLogs = (req, res) => {
  let logs = readLogs();
  const {
    level, message, resourceId,
    timestamp_start, timestamp_end,
    traceId, spanId, commit
  } = req.query;

  logs = logs.filter(log => {
    let match = true;
    if (level && log.level !== level) match = false;
    if (message && !log.message.toLowerCase().includes(message.toLowerCase())) match = false;
    if (resourceId && log.resourceId !== resourceId) match = false;
    if (timestamp_start && new Date(log.timestamp) < new Date(timestamp_start)) match = false;
    if (timestamp_end && new Date(log.timestamp) > new Date(timestamp_end)) match = false;
    if (traceId && log.traceId !== traceId) match = false;
    if (spanId && log.spanId !== spanId) match = false;
    if (commit && log.commit !== commit) match = false;
    return match;
  });

  logs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  res.json(logs);
};

module.exports = { ingestLog, getLogs };
