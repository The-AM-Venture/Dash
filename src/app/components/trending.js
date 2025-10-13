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
    <div className='w-full overflow-x-auto'>
        <div className='grid grid-cols-6'>
            {
                testtrends.map( (link,i) => 
                    <div className='bg-white border-1 text-black w-full h-20 p-2'>
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