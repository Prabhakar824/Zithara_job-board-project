import JobForm from '../components/JobForm';
import Navbar from '../components/Navbar';

export default function Dashboard() {
  const styles = {
    container: {
      backgroundColor: '#f9fafe',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: "'Segoe UI', sans-serif",
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#007bff',
      marginBottom: '1rem',
      textAlign: 'center',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      padding: '2rem',
      margin: '2rem auto',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      maxWidth: '600px',
    },
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.card}>
        <h1 style={styles.title}>Company Dashboard</h1>
        <JobForm />
      </div>
    </div>
  );
}
