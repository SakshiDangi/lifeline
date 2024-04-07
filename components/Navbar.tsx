import React from 'react'
import Link from "next/link";

export default function Navbar() {
  return (
    <div className='flex justify-between'>
       <div>LifeLine</div> 
       <div>
        <ul className='flex gap-2 m-2 item-center'>
        <Link href="/"><li>HOme</li></Link>
        <Link href="/blog"><li>Blog</li></Link>
        <Link href="/safety"><li>Safety Plan</li></Link>
        <Link href="/signin"><li>Signin</li></Link>
        <Link href="/signup"><li>Signup</li></Link>
        </ul>
        </div>
    </div>
  )
}
