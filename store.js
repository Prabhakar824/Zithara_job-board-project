
import { create } from 'zustand';

export const useJobStore = create((set) => ({
  jobs: [
    { id: 1, title: 'Frontend Developer', company: 'TechCorp', location: 'Remote', type: 'Full-time' },
    { id: 2, title: 'Backend Developer', company: 'CodeWave', location: 'Bangalore', type: 'Part-time' },
    { id: 3, title: 'Fullstack Developer', company: 'InnovateX', location: 'Hyderabad', type: 'Full-time' },
    { id: 4, title: 'Software System Tester', company: 'TestLogic', location: 'Mumbai', type: 'Part-time' },
    { id: 5, title: 'GenerativeAI Engineer', company: 'AI NextGen', location: 'Bangalore', type: 'Full-time' },
    { id: 6, title: 'Data Scientist', company: 'DataBridge', location: 'Chennai', type: 'Contract' },
    { id: 7, title: 'UI/UX Designer', company: 'DesignCraft', location: 'Delhi', type: 'Full-time' },
    { id: 8, title: 'DevOps Engineer', company: 'CloudWorks', location: 'Remote', type: 'Full-time' },
    { id: 9, title: 'Product Manager', company: 'InnovateX', location: 'Hyderabad', type: 'Full-time' },
    { id: 10, title: 'Systems Analyst', company: 'TechMatrix', location: 'Pune', type: 'Contract' }
  ],
  addJob: (job) => set((state) => ({ jobs: [...state.jobs, job] }))
}));

const styles = {
  container: {
    backgroundColor: '#f0f8ff',
    minHeight: '100vh',
    padding: '2rem',
    fontFamily: "'Segoe UI', sans-serif",
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
  },
  '@media (min-width: 768px)': {
    grid: {
      gridTemplateColumns: '1fr 1fr',
    },
  },
};
export default styles;