import React from 'react';

const testtrends = [
  {name: 'My personal website', link: 'https:/alfredmalone.com'},
  {name: 'Val Bui', link: 'https://valbui.com'},
  {name: 'My personal website', link: 'https:/alfredmalone.com'},
  {name: 'Val Bui', link: 'https://valbui.com'},
  {name: 'My personal website', link: 'https:/alfredmalone.com'},
  {name: 'Val Bui', link: 'https://valbui.com'},

];

export default function Trending() {
  return (
    <>
        <div className='flex flex-row  absolute '>
            {
                testtrends.map( (link,i) => 
                    <div key={i} className='border-3 bg-surface-a0 text-light-a0 md:w-80 w-40 border-b-3 border-surface-a10 p-2'>
                        <div className='flex md:flex-row flex-col justify-between lg:text-justify text-center lg:text-lg text-xs'>
                            <p>BTX</p>
                            <div className='flex flex-col'>
                                <p>122950.60</p>
                                <div className='mt-auto lg:text-sm text-[1rem]'>
                                    <p >^0.41%</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                )
            }


        </div>



    

   </>
  )
}