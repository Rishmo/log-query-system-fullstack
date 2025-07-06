import React, { useState } from 'react';
import './LogList.css';

function LogList({ logs }) {
  if (!logs || logs.length === 0) {
    return <div className="no-logs">🚫 No logs found based on your filters.</div>;
  }

  return (
    <div className="log-table-container">
      <div className="log-count">📦 Showing {logs.length} log{logs.length > 1 ? 's' : ''}</div>
      <table className="log-table">
        <thead>
          <tr>
            <th>Level</th>
            <th>Message</th>
            <th>Resource ID</th>
            <th>Timestamp</th>
            <th>Trace ID</th>
            <th>Span ID</th>
            <th>Commit</th>
            <th>Metadata</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <LogRow key={index} log={log} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function LogRow({ log }) {
  const [showMeta, setShowMeta] = useState(false);
  return (
    <>
      <tr className={`log-row ${log.level}`}>
        <td><span className={`level-badge ${log.level}`}>{log.level.toUpperCase()}</span></td>
        <td>{log.message}</td>
        <td>{log.resourceId}</td>
        <td>{new Date(log.timestamp).toLocaleString()}</td>
        <td>{log.traceId}</td>
        <td>{log.spanId}</td>
        <td>{log.commit}</td>
        <td>
          {log.metadata ? (
            <button className="meta-btn" onClick={() => setShowMeta(!showMeta)}>
              {showMeta ? 'Hide' : 'Show'}
            </button>
          ) : '—'}
        </td>
      </tr>
      {showMeta && (
        <tr className="meta-row">
          <td colSpan="8">
            <pre className="meta-json">{JSON.stringify(log.metadata, null, 2)}</pre>
          </td>
        </tr>
      )}
    </>
  );
}

export default LogList;
