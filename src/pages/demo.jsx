import BaseLayout from '@/layout/base-layout'
import React from 'react'

export default function Demo() {
  return (
    <div className='h-screen bg-red-600'>
      <div className='pt-[100px]'>

        <h1 className='text-purple-600 text-2xl'>Demo page</h1>
      </div>
    </div>
  )
}

Demo.Layout = BaseLayout;