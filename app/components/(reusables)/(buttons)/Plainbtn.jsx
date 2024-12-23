import React from 'react'
import Link from 'next/link'
import { FaArrowRightLong } from "react-icons/fa6";


export default function Plainbtn({title , link}) {
  return (
    <Link href={link} className="uppercase flex justify-between gap-2 items-center"> <FaArrowRightLong/> {title} </Link>
  )
}
