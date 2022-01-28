import React from 'react';
import { Link } from 'gatsby';

export default function Navbar() {
  return (
    <div style={styles.nav}>
        <Link style={styles.navItem} to='/'>Home</Link>
        <Link style={styles.navItem} to='/about'>About</Link>
    </div>
  );
}


const styles = {
    nav: { display: 'flex'},
    navItem: { textDecoration: 'none', padding: '1rem', color: 'green'}
}