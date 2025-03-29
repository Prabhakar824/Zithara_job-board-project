import { useState } from 'react';
import { useJobStore } from '../store/store';

export default function JobForm() {
  const addJob = useJobStore((state) => state.addJob);
  const [job, setJob] = useState({ title: '', company: '', location: '', type: 'Full-time' });

  const handleChange = (e) => setJob({ ...job, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    addJob({ ...job, id: Date.now() });
    alert('Job added successfully');
  };

  const styles = {
    formContainer: {
      backgroundColor: '#e7f3ff',
      borderRadius: '1.5rem',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.05)',
      maxWidth: '600px',
      margin: 'auto',
      animation: 'fadeIn 0.5s ease',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: "'Segoe UI', sans-serif",
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem',
      marginTop: '2rem',
    },
    input: {
      width: '100%',
      padding: '1rem',
      marginBottom: '1.5rem',
      border: '2px solid #90caf9',
      borderRadius: '8px',
      fontSize: '1.2rem',
      color: '#1e3a8a',
      backgroundColor: '#f0f8ff',
      outline: 'none',
      transition: 'border-color 0.3s',
    },
    inputFocus: {
      borderColor: '#007bff',
    },
    button: {
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '1rem 2.5rem',
      borderRadius: '3rem',
      fontSize: '1.4rem',
      fontWeight: '600',
      cursor: 'pointer',
      border: 'none',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
      transform: 'scale(1.05)',
    },
  };

  return (
    <form onSubmit={handleSubmit} style={styles.formContainer}>
      <h2 style={{ fontSize: '2.5rem', color: '#1e3a8a', marginBottom: '2rem' }}>Post a Job</h2>
      <input
        name="title"
        placeholder="Job Title"
        onChange={handleChange}
        style={styles.input}
        onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
        onBlur={(e) => Object.assign(e.target.style, styles.input)}
      />
      <input
        name="company"
        placeholder="Company"
        onChange={handleChange}
        style={styles.input}
        onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
        onBlur={(e) => Object.assign(e.target.style, styles.input)}
      />
      <input
        name="location"
        placeholder="Location"
        onChange={handleChange}
        style={styles.input}
        onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
        onBlur={(e) => Object.assign(e.target.style, styles.input)}
      />
      <button
        type="submit"
        style={styles.button}
        onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.buttonHover)}
        onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.button)}
      >
        Post Job
      </button>
    </form>
  );
}
