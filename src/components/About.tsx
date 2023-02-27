const About = () => {

    return (
        <div className='w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white sm:h-screen' id="about">
            <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 pt-12 sm:pt-0'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-l mt- sm:text-xl'>
                Full Stack Developer with experience in technologies such as JavaScript, React JS, Node JS, Express JS and PostgresSQL. I’m interested in continuing learning new technologies and obtain skills that make me not only a better professional but also a better person.
                </p>
                <br/>
                <p className='text-m sm:text-xl'>
                My main skills are the ability to analyze and solve problems, willingness to work in team and to learn.
                </p>
                <br/>
                <p className='text-m sm:text-xl'>
                I have developed two projects as a programmer in which I used technologies listed before, and thanks to this I have developed personal skills such as leadership, teamwork and adaptability.
                </p>
                <br/>
                <p className='text-m mb-10 sm:text-xl'>
                I am a mechanical engineer graduate from Universidad del Norte. Since then I have gained work experience in companies such as CocaCola FEMSA in maintenance area, also worked as freelancer in sectors such as stock market, administrative positions and logistics of mass events.
                </p>
            </div>
        </div>
    )
}

export default About;