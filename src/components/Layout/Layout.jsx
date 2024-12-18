import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children, pageType }) => {
  return (
    <>
      <Header pageType={pageType}  />
      <main
        className={`min-h-screen pb-24 bg-whitek-100 ${pageType === 'home' ? '' : 'pt-28'}`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};
