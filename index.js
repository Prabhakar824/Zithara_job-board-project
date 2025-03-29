import { useJobStore } from '../store/store';
import JobCard from '../components/JobCard';
import Navbar from '../components/Navbar';

export default function HomePage() {
  const jobs = useJobStore((state) => state.jobs);

  const styles = {
    container: {
      backgroundImage: "url('/background2.jpeg')", // Fixed Path
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: "'Segoe UI', sans-serif",
      color: '#fff',
      textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '2rem',
      textAlign: 'center',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '2rem', // Fixed Spacing
    },
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <h1 style={styles.title}>Job Listings</h1>
      <div style={styles.grid}>
        {jobs.map((job) => <JobCard key={job.id} job={job} />)}
      </div>
    </div>
  );
}
