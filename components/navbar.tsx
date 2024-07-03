'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function Navbar() {
  const path = usePathname();
  return (
    <div className="flex sm:flex-col flex-row  bg-gray-100 sm:bg-[#FAFAF9] border-b sm:border-none p-4 sm:space-y-4 space-x-4 items-center">
      <div className="bg-white p-2 rotate-3 shadow max-w-24 pb-1">
        <div className="relative h-24 w-20">
          <Image src={'/profileImage.jpg'} alt="profile pic" layout="fill" />
        </div>
        <h3 className="font-semibold text-sm">Shyan Roy Choudhury</h3>
      </div>
      <div className=" text-right">
        <div className="space-y-4">
          <div className="flex flex-row sm:flex-col space-x-4 ">
            <Link
              href={'/'}
              className={`${
                path === '/' ? 'underline decoration-inherit' : ''
              }`}
            >
              Home
            </Link>
            <Link
              href={'/blog'}
              className={`${
                path === '/blog' ? 'underline decoration-inherit' : ''
              }`}
            >
              Blog
            </Link>
            <Link
              href={'/work'}
              className={`${
                path === '/work' ? 'underline decoration-inherit' : ''
              }`}
            >
              Work
            </Link>
            <Link
              href={'/projects'}
              className={`${
                path === '/projects' ? 'underline decoration-inherit' : ''
              }`}
            >
              Projects
            </Link>
          </div>
          <div className="flex flex-row sm:flex-col space-x-4 text-gray-500">
            <Link
              href={'/contact'}
              className={`${
                path === '/contact' ? 'underline decoration-inherit' : ''
              }`}
            >
              Contact
            </Link>
            <Link href={'https://github.com/ShyanRoyChoudhury'}>Github</Link>
            <Link
              href={
                'https://www.linkedin.com/in/shyan-roy-choudhury-79a860198/'
              }
            >
              LinkedIn
            </Link>
            <Link href={'https://twitter.com/kenobi8356'}>X</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
