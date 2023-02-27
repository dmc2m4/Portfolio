const picture = require("../assets/Daniel.jpg")
const { MdArrowRightAlt } = require("react-icons/md")
const {Link} = require('react-scroll')


const Home = () => {

    return (
        <div className='h-auto sm:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800' id="home">
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pt-12 sm:pt-0'>
                <div className='flex flex-col justify-center h-full pt-12 sm:pt-0'>
                    <h2 className='text-3xl sm:text-7xl font-bold text-white'>I'm a full stack developer</h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        Skilled and passionate with highly capacity of learning, and teamwork. A dedicated leader with the ability of develop strategies for minimizing problems under pressure. Bilingual, hardworking with positive attitude and the willingness and motivation to learn new programs.
                    </p>
                    <div className="pb-5 sm:pb-0">
                        <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Porfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdArrowRightAlt size={25} className="ml-2"/>
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={picture} alt='my profile' className='rounded-2xl mx-auto w-2/3 my-auto ' />
                </div>
            </div>
        </div>
    )
}

export default Home;