import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import incidentsData from "./incidentdata";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function Home({ incidents, handleToggleDescription, filterSeverity, setFilterSeverity, sortOrder, setSortOrder }) {
  const filteredIncidents = incidents
    .filter(incident => filterSeverity === "All" || incident.severity === filterSeverity)
    .sort((a, b) => sortOrder === "Newest"
      ? new Date(b.reported_at) - new Date(a.reported_at)
      : new Date(a.reported_at) - new Date(b.reported_at)
    );

  return (
    <div className="container">
      <div style={{
        display: 'flex',
        justifyContent: 'flex-start',
        marginBottom: '2rem',
        marginLeft: '75%',
        gap: '1rem'
      }}>
        <select
          value={filterSeverity}
          onChange={(e) => setFilterSeverity(e.target.value)}
          style={{ width: '40%' }}
        >
          <option value="All">All Severities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          style={{ width: '40%' }}
        >
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>
      </div>
      <div className="incidents-grid">
        {filteredIncidents.map((incident) => (
          <div key={incident.id} className="incident-card">
            <div className="incident-title">{incident.title}</div>
            <div className="incident-info">Severity: {incident.severity}</div>
            <div className="incident-info">Date: {new Date(incident.reported_at).toLocaleDateString()}</div>
            <button onClick={() => handleToggleDescription(incident.id)}>
              {incident.showDescription ? "Hide Details" : "View Details"}
            </button>
            {incident.showDescription && (
              <p style={{ marginTop: "1rem", color: "#475569" }}>{incident.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ReportIncident({ handleAddIncident }) {
  const [newIncident, setNewIncident] = useState({ title: '', description: '', severity: 'Low' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newIncident.title || !newIncident.description) {
      toast.error("Please fill all fields!");
      return;
    }
    handleAddIncident(newIncident);
    setNewIncident({ title: '', description: '', severity: 'Low' });
    toast.success("Incident successfully reported!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Report New Incident</h1>
      <input
        type="text"
        placeholder="Title"
        value={newIncident.title}
        onChange={(e) => setNewIncident({ ...newIncident, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={newIncident.description}
        onChange={(e) => setNewIncident({ ...newIncident, description: e.target.value })}
      ></textarea>
      <select
        value={newIncident.severity}
        onChange={(e) => setNewIncident({ ...newIncident, severity: e.target.value })}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Submit Incident</button>
    </form>
  );
}





function App() {
  const [incidents, setIncidents] = useState(incidentsData);
  const [filterSeverity, setFilterSeverity] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");

  const handleToggleDescription = (id) => {
    setIncidents(prev =>
      prev.map(item => item.id === id ? { ...item, showDescription: !item.showDescription } : item)
    );
  };

  const handleAddIncident = (newIncident) => {
    const newEntry = {
      id: incidents.length + 1,
      ...newIncident,
      reported_at: new Date().toISOString()
    };
    setIncidents(prev => [newEntry, ...prev]);
  };

  return (
    <Router>
      <header>
        <div><Link to="/">AI Safety Dashboard</Link></div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/report">Report Incident</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={
          <Home
            incidents={incidents}
            handleToggleDescription={handleToggleDescription}
            filterSeverity={filterSeverity}
            setFilterSeverity={setFilterSeverity}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />
        } />
        <Route path="/report" element={<ReportIncident handleAddIncident={handleAddIncident} />} />
      </Routes>
      <footer style={{
  textAlign: "center", 
  padding: "1rem",
  marginTop: "2rem",
  fontSize: "0.9rem",
  color: "#64748b",
  borderTop: "1px solid #e2e8f0"
}}>
  developed By <span style={{ color: "black", fontSize: "1.1rem" }}> <pre> Ayush Kumar Mishra 
    Registration No: 12212147
    Email: ayushmishradevil51@gmail.com</pre>
  </span>
</footer>
      <ToastContainer />
    </Router>
  );
}

export default App;
