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
        <div className='w-full relative'>
        <div className='flex flex-row flex-nowrap overflow-x-auto lg:relative absolute'>
            {
                testtrends.map( (link,i) => 
                    <div key={i} className='bg-white border-1 text-black flex-auto lg:w-full w-80 h-20 p-2 '>
                        <div className='h-full'>
                        <div className='flex flex-row justify-between lg:text-lg text-xs'>
                            <p>BTX - USD</p>
                            <p>122950.60</p>
                        </div>
                        <div className='mt-auto lg:text-sm text-[1rem]'>
                        <p >^0.41% (505.44)</p>
                        </div>

                        </div>
                    </div>
                )
            }


        </div>

        </div>



    

   </>
  )
}