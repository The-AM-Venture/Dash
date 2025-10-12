'use client'
import Link from 'next/link'
import { Lineicons } from "@lineiconshq/react-lineicons";
import {  MenuHamburger1Duotone, ChevronDownDuotone ,Bookmark1Duotone, ChevronLeftCircleDuotone, Home2Duotone, Code1Duotone, HelmetSafety1Duotone, Globe1Duotone, DashboardSquare1Duotone } from "@lineiconshq/free-icons";
import React, { useState }  from 'react';

const links = [
  {name: 'Home', icon: Home2Duotone, link: 'https://home.theamventure.com'},
  {name: 'Code', icon: Code1Duotone, link: 'https://code.theamventure.com'},

];

const pLinks = [
  {name: 'My personal website', icon: Globe1Duotone, link: 'https:/alfredmalone.com'},
  {name: 'Val Bui', icon: Globe1Duotone, link: 'https://valbui.com'},

];

export default function Nav() {
  const [generalCollapse, setGeneralCollapse] = useState(false);
  const [projectsCollapse, setProjectsCollapse] = useState(false);
  return (
    <>
    <nav className='flex flex-row h-20 bg-sky-50 w-screen'>
        <div className='relative my-auto flex flex-row'>
            <p className='text-xl font-bold text-black'>Welcome</p>
            <div>
                {/*general links*/}
                <div className="inline-block" onClick={() => setGeneralCollapse(generalCollapse === true ? false : true)}>
                    
                    <div className='flex flex-row ml-10'>
                        <p className='text-black font-bold text-lg pr-1 my-auto'>General</p>
                        <Lineicons icon={ChevronDownDuotone} size={20} color="black" strokeWidth={2} />
                    </div>
                    
                    <ul className={generalCollapse ? 'absolute block z-[1] ml-10' : `hidden`}>
                            {
                                links.map( (link,i) => 
                                    <li className='px-4 py-2 w-100 bg-sky-50'key={i} >
                                        <div className='items-center'>
                                            <Link className='flex flex-row' href={link.link} target="_blank" rel="noopener noreferrer">
                                                <Lineicons icon={link.icon} size={20} color="black" strokeWidth={2} />
                                                <p className="ml-1 text-black text-lg">{link.name}</p>
                                            </Link >
                                        </div>
                                    </li>
                                )
                            }
                    </ul>
                </div>
                {/*project links*/}
                <div className="inline-block" onClick={() => setProjectsCollapse(projectsCollapse === true ? false : true)}>
                    
                    <div className='flex flex-row ml-10'>
                        <p className='text-black font-bold text-lg pr-1 my-auto'>Projects</p>
                        <Lineicons icon={ChevronDownDuotone} size={20} color="black" strokeWidth={2} />
                    </div>
                    
                    <ul className={projectsCollapse ? 'absolute block z-[1] ml-10' : `hidden`}>
                            {
                                pLinks.map( (link,i) => 
                                    <li className='px-4 py-2 w-100 bg-sky-50' key={i} >
                                        <div className='items-center'>
                                            <Link className='flex flex-row' href={link.link} target="_blank" rel="noopener noreferrer">
                                                <Lineicons icon={link.icon} size={20} color="black" strokeWidth={2} />
                                                <p className="ml-1 text-black text-lg">{link.name}</p>
                                            </Link >
                                        </div>
                                    </li>
                                )
                            }
                    </ul>
                </div>
            </div>
        </div>

        
                        <Lineicons className="my-auto ml-auto mr-10" icon={MenuHamburger1Duotone} size={20} color="black" strokeWidth={2} />

    </nav>
    </>
  )
}