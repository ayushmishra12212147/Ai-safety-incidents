import { useState } from 'react';
import incidentsData from './incidentdata';
import './App.css';

function App() {
  const [incidents, setIncidents] = useState(incidentsData);
  const [filter, setFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('Newest');
  const [expanded, setExpanded] = useState({});
  const [newIncident, setNewIncident] = useState({ title: '', description: '', severity: 'Low' });

  const filteredIncidents = incidents
    .filter(incident => filter === 'All' || incident.severity === filter)
    .sort((a, b) => {
      if (sortOrder === 'Newest') return new Date(b.reported_at) - new Date(a.reported_at);
      return new Date(a.reported_at) - new Date(b.reported_at);
    });

  const toggleDetails = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIncident(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newIncident.title || !newIncident.description) {
      alert("Please fill all fields!");
      return;
    }
    const newEntry = {
      id: incidents.length + 1,
      ...newIncident,
      reported_at: new Date().toISOString()
    };
    setIncidents(prev => [newEntry, ...prev]);
    setNewIncident({ title: '', description: '', severity: 'Low' });
    alert("Incident successfully reported!");
  };

  return (
    <div className="container">
      <h1>AI Safety Incident Dashboard</h1>

      {/* Filter and Sort Controls */}
      <div className="controls">
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="All">All Severities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>
      </div>

      {/* Incident List */}
      {filteredIncidents.map(incident => (
        <div key={incident.id} className="incident-card">
          <h3 className="incident-title">{incident.title}</h3>
          <div className="incident-meta">
            <p><strong>Severity:</strong> {incident.severity}</p>
            <p><strong>Reported At:</strong> {new Date(incident.reported_at).toLocaleString()}</p>
          </div>
          <button className="details-button" onClick={() => toggleDetails(incident.id)}>
            {expanded[incident.id] ? "Hide Details" : "View Details"}
          </button>
          {expanded[incident.id] && (
            <p style={{ marginTop: '10px' }}>{incident.description}</p>
          )}
        </div>
      ))}

      {/* New Incident Form */}
      <div className="new-incident-form">
        <h2>Report New Incident</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            placeholder="Title"
            value={newIncident.title}
            onChange={handleInputChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newIncident.description}
            onChange={handleInputChange}
          />
          <select
            name="severity"
            value={newIncident.severity}
            onChange={handleInputChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button type="submit" className="submit-button">
            Submit Incident
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
