import Breadcrumb from '@/app/utils/Breadcrumb'
import React from 'react'
import CTA from '../(buttons)/CTA'

export default function ServiceBanner({head , subhead , banner , breadcum , link , title , superbtn}) {
  return (
    <section className=' bg:url(${banner})'>
        <Breadcrumb/>
        <h1>{head}</h1>
        <p>{subhead}</p>
        <CTA/>
    </section>
  )
}
