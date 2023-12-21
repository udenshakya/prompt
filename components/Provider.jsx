"use client";
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';


const Providers = ({children,session}) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}

export default Providers;
