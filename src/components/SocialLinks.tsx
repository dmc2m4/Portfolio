import React from 'react';
const { HiOutlineMail } = require('react-icons/hi');
const { BsPersonSquare, BsLinkedin, BsGithub  } = require('react-icons/bs');


const SocialLinks = () => {

    type Links = {
        id: number,
        child: JSX.Element,
        href: string,
        style: string,
        download: boolean
    }

    const Links2: Links[] = [
        {
            id: 1,
            child: (
                <>
                Linkedin <BsLinkedin size={30}/>
                </>
            ),
            href: "https://www.linkedin.com/in/daniel-martinez-0b6294109/",
            style: "rounded-tr-md",
            download: false
        },
        {
            id: 2,
            child: (
                <>
                GitHub <BsGithub size={30}/>
                </>
            ),
            href: "https://github.com/dmc2m4",
            style: "",
            download: false
        },
        {
            id: 3,
            child: (
                <>
                Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: "mailto:danielmartinezcabrera@hotmail.com",
            style: "",
            download: false
        },
        {
            id: 4,
            child: (
                <>
                Resume <BsPersonSquare size={30}/>
                </>
            ),
            href: "/Daniel Martínez CV (EN).pdf",
            style: "rounded-br-md",
            download: true
        }
    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {Links2.map(l => (
                    <li key={l.id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-gray-500 duration-300 ${l.style}`}>
                        <a href={l.href} className='flex justify-between items-center text-white w-full' download={l.download} target='_blank' rel="noreferrer">
                            {l.child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialLinks;