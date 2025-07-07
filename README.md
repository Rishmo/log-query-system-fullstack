# 📊 Full-Stack Log Ingestion & Querying System

This project is built as a solution to the **Evallo Full-Stack Developer Assessment**, aiming to simulate a real-world engineering challenge: designing and building a robust log monitoring tool like Datadog or Splunk.

> It includes:
> - An Express.js backend for log ingestion and querying
> - A React.js frontend dashboard for filtering and viewing logs
> - A JSON file for data persistence (as per requirement)
> - A structured, aesthetic, and responsive UI with expandable metadata

---

## 🔧 Tech Stack Used (and Why)

| Stack     | Tool                  | Why It Was Chosen |
|-----------|-----------------------|--------------------|
| **Frontend** | React + Axios + Vanilla CSS | Simple, flexible, and fast UI development |
| **Backend**  | Node.js + Express     | Minimal and highly scalable REST API framework |
| **Persistence** | `fs` module + `logs.json` | Matches requirement: **No DB allowed** |
| **Deployment** | Vercel (Frontend), Render (Backend) | Serverless + dynamic hosting for separation of concerns |

---

## 📁 Project Structure
```
log-system-fullstack/
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── utils/
│   └── data/logs.json
└── frontend/
    ├── src/
    │   ├── App.js
    │   ├── api/logService.js
    │   ├── components/
    │   │   ├── FilterBar.js
    │   │   ├── LogList.js
    │   │   ├── Header.js 
    ├── public/
```

---

## ✅ Features Implemented

### 🔁 **Backend**
| Feature | Description |
|--------|-------------|
| `POST /logs` | Accepts new log entries and stores in JSON file |
| `GET /logs` | Returns logs based on filters (AND-combined) |
| JSON File Persistence | Logs stored in `logs.json` for simplicity and portability |

Supports filters:
- `message` (substring match)
- `level` (error, warn, info, debug)
- `resourceId`
- `timestamp_start`, `timestamp_end`

Logs are returned in **reverse chronological order**.

---

### 💻 **Frontend** (React Dashboard)
| Component     | Functionality |
|---------------|---------------|
| **FilterBar** | Accepts filters (message, level, resourceId, start/end time) |
| **Debounced Message Input** | Bonus: avoid spamming API while typing |
| **LogList (Table Format)** | Displays logs with metadata toggle (bonus) |
| **Badges per Log Level** | Color-coded level indicators (info = blue, error = red, etc.) |
| **Expandable Metadata** | Collapsible section to view nested JSON |
| **Responsive Design** | Works on all screen sizes |

### Bonus 💡
| Bonus Feature | Implemented? | Notes |
|---------------|--------------|-------|
| Debounced input | ✅ | Improves UX and performance |
| Expandable Metadata Viewer | ✅ | Renders nested metadata on toggle |
| Table-style structured log UI | ✅ | Like Datadog/Splunk, not just cards |
| Gradient Background Animation | ✅ | To improve UI |
| Styled Filters with Gradient Buttons | ✅ | Boosts aesthetics |

---

## 🧠 Design Choices

| Decision | Justification |
|----------|---------------|
| Use of `fs` instead of DB | Required by assessment. JSON is lightweight and portable |
| Express routing structure | Easier to maintain, scalable |
| Modular folder structure | Professional code hygiene |
| React + Hooks (not Redux) | Simple, fast state management |
| CSS-only styling | Avoids extra frameworks, keeps bundle light |
| Log table layout | Matches real-world dashboards like Splunk |
| Show JSON metadata | Gives full context without cluttering UI |

---

## 🚀 Setup Instructions

### 🔁 Backend Setup (Node.js)
```bash
cd backend
npm install
node server.js
```
➡ API available at: `http://localhost:5000`

### 🌐 Frontend Setup (React)
```bash
cd frontend
npm install
npm start
```
➡ UI runs at: `http://localhost:3000`

---

## 🧪 Testing Logs

Send logs to `POST /logs` via Postman or curl:

### ✅ Example: WARN
```json
{
  "level": "warn",
  "message": "Memory usage exceeded",
  "resourceId": "monitor-02",
  "timestamp": "2025-07-06T18:30:00Z",
  "traceId": "trc101",
  "spanId": "span101",
  "commit": "9b23ef",
  "metadata": {
    "usage": "87%",
    "threshold": "85%"
  }
}
```

### ✅ Example: INFO
```json
{
  "level": "info",
  "message": "User profile updated successfully",
  "resourceId": "user-service",
  "timestamp": "2025-07-06T18:45:00Z",
  "traceId": "trc202",
  "spanId": "span202",
  "commit": "bc789a",
  "metadata": {
    "userId": "u12345",
    "operation": "update"
  }
}
```

### ✅ Example: DEBUG
```json
{
  "level": "debug",
  "message": "Auth token generated with claims",
  "resourceId": "auth-service",
  "timestamp": "2025-07-06T19:00:00Z",
  "traceId": "trc303",
  "spanId": "span303",
  "commit": "a9cd32",
  "metadata": {
    "claims": ["email", "role", "session"],
    "tokenId": "jwt123xyz"
  }
}
```

---

## 🧠 Evaluation Checklist (from PDF)

| Requirement                        | Status |
|------------------------------------|--------|
| POST `/logs` saves to JSON file    | ✅ |
| GET `/logs` supports all filters   | ✅ |
| Filters combined with AND logic    | ✅ |
| Reverse-chronological output       | ✅ |
| React frontend with filters        | ✅ |
| Clean, usable UI                   | ✅ |
| Debounced message input            | ✅ Bonus |
| Expandable metadata field          | ✅ Bonus |
| Dashboard-style layout             | ✅ Bonus |
| Clear README                       | ✅ |

---

## 🎯 Final Thoughts

This project reflects real-world engineering skills:
- REST API design and filtering logic
- File-based persistence
- React state and controlled input management
- UI polish and presentation
