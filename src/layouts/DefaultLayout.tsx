import { PropsWithChildren } from 'react';
import React from 'react'
import Header from './Header';

type DefaultLayoutProps = {
};



export default function DefaultLayout(props: PropsWithChildren<DefaultLayoutProps>) {

  return (
    <div className='flex h-screen bg-white'> 
        <main className={'w-full h-full'}>
          <div className='w-full mx-auto'>
            <Header/>
          { props.children }
          </div>
        </main>
    </div>
  );
}
