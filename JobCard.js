import Link from 'next/link';

export default function JobCard({ job }) {
  const styles = {
    card: {
      padding: '2rem',
      backgroundColor: '#e7f3ff', // Pale Blue Background
      borderRadius: '1.5rem',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.4s ease, box-shadow 0.4s ease',
      maxWidth: '600px',
      margin: 'auto',
      overflow: 'hidden',
      cursor: 'pointer',
    },
    cardHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#007bff',
      marginBottom: '2rem',
      textAlign: 'center',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem',
      marginTop: '2rem',
    },
    details: {
      color: '#475569', // Muted Gray-Blue
      fontSize: '1.2rem',
      marginBottom: '1.5rem',
    },
    button: {
      display: 'inline-block',
      backgroundColor: '#90caf9', // Light Sky Blue
      color: '#ffffff',
      padding: '1rem 2.5rem',
      borderRadius: '3rem',
      fontSize: '1.2rem',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#64b5f6', // Deeper Sky Blue
      transform: 'scale(1.05)',
    },
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
      onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.card)}
    >
      <h2 style={styles.title}>{job.title}</h2>
      <p style={styles.details}>{job.company} - {job.location}</p>
      <Link href={`/job/${job.id}`}>
        <span
          style={styles.button}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.buttonHover)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.button)}
        >
          View Details
        </span>
      </Link>
    </div>
  );
}
