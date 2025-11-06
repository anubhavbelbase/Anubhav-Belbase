import React, { useState, useMemo } from 'react';
import type { ViewType, Complaint, ComplaintCategory, ComplaintStatus } from './types';
import { MOCK_COMPLAINTS } from './constants';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardView from './views/DashboardView';
// FIX: Corrected import path to match the filename 'ReportsView.tsx'.
import ComplaintsView from './views/ReportsView';
import AnalyticsView from './views/AnalyticsView';
import SettingsView from './views/SettingsView';
import UsersView from './views/UsersView';
// FIX: Corrected import path to match the filename 'ReportDetailModal.tsx'.
import ComplaintDetailModal from './components/ReportDetailModal';
import LoginView from './views/LoginView';
import { translations } from './translations';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ne'>('en');
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ComplaintCategory | 'all'>('all');
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(null);
  const [complaints, setComplaints] = useState<Complaint[]>(MOCK_COMPLAINTS);

  const t = (key: string) => translations[language][key] || key;

  const handleLogin = (email: string, pass: string) => {
    // This is a mock login. In a real app, you'd call Firebase Auth here.
    if (email === 'admin@civic.gov.np' && pass === 'password') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials. Use admin@civic.gov.np and password.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  
  const handleStatusUpdate = (complaintId: string, newStatus: ComplaintStatus) => {
      setComplaints(prevComplaints => prevComplaints.map(c => 
         c.id === complaintId ? { ...c, status: newStatus } : c
      ));
      // Also update the selected complaint if it's open
      setSelectedComplaint(prev => prev ? {...prev, status: newStatus} : null);
  };


  const filteredComplaints = useMemo(() => {
    return complaints.filter(complaint => {
      const searchMatch =
        complaint.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        complaint.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        complaint.submittedBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
        complaint.location.address.toLowerCase().includes(searchTerm.toLowerCase());
      
      const categoryMatch = selectedCategory === 'all' || complaint.category === selectedCategory;

      return searchMatch && categoryMatch;
    });
  }, [searchTerm, selectedCategory, complaints]);
  
  const handleExportCSV = () => {
    const headers = ['ID', 'Category', 'Description', 'Submitted By', 'Date', 'Status', 'Address', 'Image URL'];
    const rows = filteredComplaints.map(complaint => [
        complaint.id,
        complaint.category,
        `"${complaint.description.replace(/"/g, '""')}"`,
        complaint.submittedBy,
        complaint.date,
        complaint.status,
        `"${complaint.location.address.replace(/"/g, '""')}"`,
        complaint.imageUrl || ''
    ].join(','));

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "civicconnect_complaints.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView complaints={complaints} onViewDetails={setSelectedComplaint} t={t} />;
      case 'complaints':
        return <ComplaintsView 
                  complaints={filteredComplaints} 
                  onViewDetails={setSelectedComplaint}
                  onCategoryChange={setSelectedCategory}
                  onExportCSV={handleExportCSV}
                  selectedCategory={selectedCategory}
                  t={t}
                />;
      case 'analytics':
        return <AnalyticsView complaints={complaints} />;
       case 'users':
        return <UsersView />;
       case 'settings':
         return <SettingsView />;
      default:
        return <DashboardView complaints={complaints} onViewDetails={setSelectedComplaint} t={t} />;
    }
  };
  
  if (!isAuthenticated) {
    return <LoginView onLogin={handleLogin} language={language} t={t} />;
  }

  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} t={t} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          currentView={currentView} 
          onSearchChange={setSearchTerm}
          setCurrentView={setCurrentView}
          language={language}
          setLanguage={setLanguage}
          onLogout={handleLogout}
          t={t}
          />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100">
          {renderView()}
        </main>
      </div>
      {selectedComplaint && <ComplaintDetailModal complaint={selectedComplaint} onClose={() => setSelectedComplaint(null)} onStatusUpdate={handleStatusUpdate} t={t} />}
    </div>
  );
}

export default App;