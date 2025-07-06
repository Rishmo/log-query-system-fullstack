import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import LogList from './components/LogList';
import { fetchLogs } from './api/logService';

function App() {
  const [filters, setFilters] = useState({
    message: '',
    level: '',
    resourceId: '',
    timestamp_start: '',
    timestamp_end: ''
  });

  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadLogs = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchLogs(filters);
      setLogs(data);
    } catch (err) {
      setError('⚠️ Failed to fetch logs.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLogs();
  }, [filters]);

  return (
    <div className="app-container">
      <Header />
      <FilterBar setFilters={setFilters} />
      {loading && <p className="center-text">Loading logs...</p>}
      {error && <p className="error-text">{error}</p>}
      <LogList logs={logs} />
    </div>
  );
}

export default App;
