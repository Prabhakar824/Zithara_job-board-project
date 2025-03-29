import Link from 'next/link';

export default function Navbar() {
  const styles = {
    navbar: {
      background: 'linear-gradient(90deg, #007bff, #00c6ff)',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '0 0 40px 40px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '1.4rem',
      fontWeight: '500',
      margin: '0 2rem',
      padding: '0.5rem 1rem',
      borderRadius: '14px',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
    },
    linkHover: {
      backgroundColor: '#0056b3',
      transform: 'scale(1.1)',
    },
    logo: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: '#fff',
      cursor: 'pointer',
    },
  };

  return (
    <nav style={styles.navbar}>
      <span style={styles.logo}>Job Board</span>
      <div>
        <Link href="/" passHref>
          <span
            style={styles.link}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.linkHover)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.link)}
          >
            Home
          </span>
        </Link>
        <Link href="/dashboard" passHref>
          <span
            style={styles.link}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.linkHover)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.link)}
          >
            Dashboard
          </span>
        </Link>
      </div>
    </nav>
  );
}
