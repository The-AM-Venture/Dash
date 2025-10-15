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
        <div className='w-full'>
        <div className='flex flex-row flex-nowrap  lg:overflow-x-hidden overflow-x-auto'>
            {
                testtrends.map( (link,i) => 
                    <div key={i} className='bg-white border-1 text-black lg:shrink-[none] shrink-[0] lg:grow  lg:w-[none] w-2xs h-20 p-2'>
                        <div className='h-full'>
                        <div className='flex flex-row justify-between'>
                            <p>BTX - USD</p>
                            <p>122950.60</p>
                        </div>
                        <div className='mt-auto'>
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