import React, { useState, useEffect } from 'react';
import './FilterBar.css';

function FilterBar({ setFilters }) {
  const [localFilters, setLocalFilters] = useState({
    message: '',
    level: '',
    resourceId: '',
    timestamp_start: '',
    timestamp_end: ''
  });

  // Debounced message search
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setFilters(prev => ({ ...prev, message: localFilters.message }));
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [localFilters.message]);

  const handleChange = (e) => {
    setLocalFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const applyFilters = () => {
    const { message, ...rest } = localFilters;
    setFilters(prev => ({ ...prev, ...rest }));
  };

  const clearFilters = () => {
    const empty = {
      message: '',
      level: '',
      resourceId: '',
      timestamp_start: '',
      timestamp_end: ''
    };
    setLocalFilters(empty);
    setFilters(empty);
  };

  return (
    <div className="filter-bar-container">
      <div className="filter-group">
        <input name="message" placeholder="🔍 Message" value={localFilters.message} onChange={handleChange} />
        <select name="level" value={localFilters.level} onChange={handleChange}>
          <option value="">🛠 All Levels</option>
          <option value="error">🔴 Error</option>
          <option value="warn">🟠 Warning</option>
          <option value="info">🔵 Info</option>
          <option value="debug">🟢 Debug</option>
        </select>
        <input name="resourceId" placeholder="🧩 Resource ID" value={localFilters.resourceId} onChange={handleChange} />
        <div className="datetime-fields">
          <label>🕐 Start Time:
            <input type="datetime-local" name="timestamp_start" value={localFilters.timestamp_start} onChange={handleChange} />
          </label>
          <label>⏰ End Time:
            <input type="datetime-local" name="timestamp_end" value={localFilters.timestamp_end} onChange={handleChange} />
          </label>
        </div>
      </div>
      <div className="filter-buttons">
        <button className="apply-btn" onClick={applyFilters}>🚀 Apply Filters</button>
        <button className="clear-btn" onClick={clearFilters}>✖ Clear</button>
      </div>
    </div>
  );
}

export default FilterBar;
