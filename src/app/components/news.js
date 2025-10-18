'use client'
import React from 'react';


const testposts = [
  {name: 'My personal website', link: 'https:/alfredmalone.com'},
  {name: 'Val Bui', link: 'https://valbui.com'},

];

export default function News() {
  return (
    <>
        <div className='ml-5 lg:mt-[0%] mt-5 lg:w-[46%] w-full h-full  bg-sky-500 p-2'>
            <h1 className='text-4xl font-bold'>News</h1>

            {
                testposts.map((post, i) =>
                <div key={i} className='flex flex-col mt-3'>
                    <h2 className='text-2xl font-bold'>THIS IS A TEST TITLE DISREGARD PLEASE MOVE ON Ten four three two</h2>
                    <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet orci eget est mollis pretium finibus ut odio. Phasellus eget dui eu erat ultricies efficitur. Aliquam metus nisl, volutpat nec vestibulum nec, placerat non neque. Suspendisse sodales mauris eget velit placerat, vel mollis tellus laoreet. </p>
                </div>
                )
            }

        </div>
    </>
  )
}