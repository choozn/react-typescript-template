import React from 'react';
import css from './Layout.module.css';

interface Props {
    children: React.ReactNode,
}

function Layout({ children }: Props) {
    return (
        <>
            <nav className={css.nav}>
                {/* Navigation */}
            </nav>
            {children}
            <footer className={css.footer}>
                {/* Footer */}
            </footer>
        </>
    );
}

export default Layout;