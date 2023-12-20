import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Header = () => {
  return (
    <header className={styles.header}>
        <div className="container d-flex justify-content-between align-items-center">
            <div className={styles.title}>
                <h1>My Website</h1>                
            </div>
            
            <nav className={styles.nav}> 
                <ul className={"d-flex justify-content-between"}>
                    <li><Link href="/">About Me</Link></li>
                    <li><Link href="/Education">Education</Link></li>
                    <li><Link href="/WorkExperience">Work Experience</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  );
};

export default Header;

