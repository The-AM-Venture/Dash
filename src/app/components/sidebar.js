'use client'
import Link from 'next/link'
import { Lineicons } from "@lineiconshq/react-lineicons";
import { Bookmark1Duotone, ChevronLeftCircleDuotone, Home2Duotone, Code1Duotone, HelmetSafety1Duotone, Globe1Duotone, DashboardSquare1Duotone } from "@lineiconshq/free-icons";
import React, { useState }  from 'react';

const links = [
  {name: 'Home', icon: Home2Duotone, link: 'https://home.theamventure.com'},
  {name: 'Code', icon: Code1Duotone, link: 'https://code.theamventure.com'},

];

const pLinks = [
  {name: 'My personal website', icon: Globe1Duotone, link: 'https:/alfredmalone.com'},
  {name: 'Val Bui', icon: Globe1Duotone, link: 'https://valbui.com'},

];

export default function Sidebar() {
  const [sidbarCollapse, setSidbarCollapse] = useState(true);
  return (
    <>
    <div className={sidbarCollapse ? `w-20 bg-sky-50 h-screen transition-all duration-500 -right-36 ` : `w-80 h-screen bg-sky-50 transition-all duration-500 -left-36 `}>

      <div className={sidbarCollapse ? "py-5 px-5 flex flex-col items-center" : "py-5 px-5 flex flex-row items-center"}>
        <div className="rounded-full  justify-items-center flex w-15 h-15">
          <img className="w-100" src="https://bucket.theamventure.com/Logo/amv/logo.png" />
        </div>
        <h1 className={sidbarCollapse ? 'invisible' : "ml-5 text-black text-xl font-bold visible"}>AMV</h1> 
        <div className={sidbarCollapse ? 'ml-1' : " ml-auto"} onClick={() => setSidbarCollapse(sidbarCollapse === false ? true : false)}>
          <Lineicons  icon={sidbarCollapse ? DashboardSquare1Duotone : ChevronLeftCircleDuotone} size={40} color="black" strokeWidth={2} />
        </div>
      </div>

      <div className={sidbarCollapse ? 'invisible' : 'visable'}>

      <div className='px-8 pt-10'>
        {/* gerneral links*/}
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
                          <Lineicons icon={link.icon} size={20} color="black" strokeWidth={2} />
                        </div>
                      </div>
                      <p className="ml-1 text-black text-lg">{link.name}</p>
                  </div>
                </Link>

              )
            }

          </div>

          {/* project links*/}
          <div className="flex flex-row mt-5 items-center">
            <div className='rounded-full  justify-items-center bg-sky-950 flex w-12 h-12'>
              <div className='my-auto block m-auto flex justify-center'> 
                <Lineicons icon={HelmetSafety1Duotone} size={30} color="white" strokeWidth={2} />
              </div>
            </div>
            <p className="ml-1 text-black text-xl font-bold">Projects</p>
            </div>

            <div className='ml-10'>

              {
                pLinks.map( (link,i) =>
                  <Link href={link.link} key={i} target="_blank" rel="noopener noreferrer">
                    <div className="flex flex-row text-red-50 items-center">
                        <div className='justify-items-center flex w-7 h-7'>
                          <div className='my-auto block m-auto flex justify-center'> 
                            <Lineicons icon={link.icon} size={20} color="black" strokeWidth={2} />
                          </div>
                        </div>
                        <p className="ml-1 text-black text-lg">{link.name}</p>
                    </div>
                  </Link>

                )
              }

        </div>

      </div>

      </div>

    </div>
    </>
  )
}