import React from 'react';
const { HiOutlineMail } = require('react-icons/hi');
const { BsFillPersonLinesFill, BsLinkedin, BsGithub  } = require('react-icons/bs');


const SocialLinks = () => {

    type Links = {
        id: number,
        child: JSX.Element,
        href: string,
        style: string
    }

    const Links2: Links[] = [
        {
            id: 1,
            child: (
                <>
                Linkedin <BsLinkedin size={35}/>
                </>
            ),
            href: "https://www.linkedin.com/in/daniel-martinez-cabrera-0b6294109/",
            style: "rounded-tr-md"
        },
        {
            id: 2,
            child: (
                <>
                GitHub <BsGithub size={35}/>
                </>
            ),
            href: "https://github.com/dmc2m4",
            style: ""
        },
        {
            id: 3,
            child: (
                <>
                Mail <HiOutlineMail size={35}/>
                </>
            ),
            href: "mailto:danielmartinezcabrera@hotmail.com",
            style: "rounded-tr-md"
        },
        {
            id: 4,
            child: (
                <>
                GitHub <BsGithub size={35}/>
                </>
            ),
            href: "https://github.com/dmc2m4",
            style: "rounded-tr-md"
        }
    ]

    return (
        <div className='flex flex-col top-[35%] left-0 fixed'>
            <ul>
                <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-gray-500 duration-300'>
                    <a href="" className='flex justify-between items-center text-white w-full'>
                        {""}
                        <>
                            LinkedIn <BsLinkedin size={35}/>
                        </>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialLinks;