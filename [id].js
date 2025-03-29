import { useRouter } from 'next/router';
import { useJobStore } from '../../store/store';
import Navbar from '../../components/Navbar';

export default function JobDetails() {
  const router = useRouter();
  const { id } = router.query;
  const jobs = useJobStore((state) => state.jobs);
  const job = jobs.find((job) => job.id === parseInt(id));

  if (!job) return <p style={{ color: '#ff4d4d', fontSize: '1.5rem', textAlign: 'center' }}>Job not found</p>;

  const styles = {
    container: {
      backgroundColor: '#f0f8ff',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: "'Segoe UI', sans-serif",
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      padding: '2rem',
      margin: '2rem auto',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      maxWidth: '600px',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#007bff',
      marginBottom: '1rem',
    },
    company: {
      fontSize: '1.2rem',
      color: '#555',
      marginBottom: '0.5rem',
    },
    details: {
      fontSize: '1rem',
      color: '#333',
    },
    type: {
      marginTop: '1.5rem',
      color: '#00b894',
      fontWeight: '600',
    },
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.card}>
        <h1 style={styles.title}>{job.title}</h1>
        <p style={styles.company}>{job.company} - {job.location}</p>
        <p style={styles.details}>Experience the best opportunities in a leading company.</p>
        <p style={styles.type}>Type: {job.type}</p>
      </div>
    </div>
  );
}
