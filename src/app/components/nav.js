import Link from 'next/link'
import { Lineicons } from "@lineiconshq/react-lineicons";
import { Bookmark1Duotone, ChevronLeftCircleDuotone, Home2Duotone, Code1Duotone } from "@lineiconshq/free-icons";
import React from 'react';

const links = [
  {name: 'Home', icon: Home2Duotone, link: 'https:/home.theamventure.com'},
  {name: 'Code', icon: Code1Duotone, link: 'https:/code.theamventure.com'},
  {name: 'link3', icon: Bookmark1Duotone, link: 'www.google.com'},

];

export default function Nav() {
  return (
    <>
    <div className="w-80 h-screen bg-sky-50">

      <div className="py-5 px-5 flex flex-row items-center">
        <div className="rounded-full  justify-items-center flex w-15 h-15">
          <img className="w-100" src="https://bucket.theamventure.com/Logo/amv/logo.png" />
        </div>
        <h1 className="ml-5 text-black text-xl font-bold">AMV</h1> 
          <Lineicons className=" ml-auto" icon={ChevronLeftCircleDuotone} size={40} color="black" strokeWidth={2} />
      </div>

      



      <div className="flex flex-row text-red-50 items-center">
      <div className='rounded-full  justify-items-center bg-sky-950 flex w-12 h-12'>
        <div className='my-auto block m-auto flex justify-center'> 
          <Lineicons icon={Bookmark1Duotone} size={30} color="white" strokeWidth={2} />
        </div>
      </div>
      <p className="ml-1 text-black text-xl font-bold">General</p>
      </div>

      <div className='ml-10'>

        {
          links.map( (link,i) =>
            <Link href={link.link} key={i} target="_blank" rel="noopener noreferrer">
              <div className="flex flex-row text-red-50 items-center">
                  <div className='justify-items-center flex w-7 h-7'>
                    <div className='my-auto block m-auto flex justify-center'> 
                      <Lineicons icon={link.icon} size={20} color="red" strokeWidth={2} />
                    </div>
                  </div>
                  <p className="ml-1 text-black text-lg">{link.name}</p>
              </div>
            </Link>

          )
        }

      </div>
      
    </div>
    </>
  )
}