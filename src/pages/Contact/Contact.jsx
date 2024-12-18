import React, { useEffect } from 'react'
import { Main } from './components/Main'
import { Message } from './components/Message'
import { Layout } from '../../components/Layout/Layout';

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className='mx-20 md:mx-36'>
        <Main/>
        <Message/>
      </div>
    </Layout>
  )
}
