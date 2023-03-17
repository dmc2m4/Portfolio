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
                I have completed individual projects where I have developed my ability to learn autonomously, discipline, and resilience.
                </p>
                <br/>
                <p className='text-m sm:text-xl'>
                I have also had the opportunity to work on group projects with agile methodologies (SCRUM) where I grew in skills such as teamwork, decision-making, code review, and leadership
                </p>
                <br/>
                <p className='text-m mb-10 sm:text-xl'>
                I am very passionate about the world of technology and would like to continue learning and growing in positions related to my profile in order to contribute to projects with high social and/or economic impact.
                </p>
            </div>
        </div>
    )
}

export default About;