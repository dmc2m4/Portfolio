const vibe = require('../assets/vibe.png')
const countries = require('../assets/travel.jpg')

const Portfolio = () => {
    return (
        <div className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
            <div className="max-w-screen-lg pb-12 md:pb-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-6">Check out my work right here</p>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-12 sm:px-0">
                    <div className="shadow-md shadow-gray-600 rounded-lg mb-12">
                        <a href="https://proyecto-final-vibes.vercel.app/" target='_blank' rel="noreferrer">
                        <img src ={vibe} alt="img" className="rounded-md h-full duration-200 hover:scale-105" />
                        </a>
                        <div>
                            <h3 className="flex justify-center text-xl p-2 md:text-2xl">E-Commerce</h3>
                        </div>
                    </div>
                    <div className="shadow-md shadow-gray-600 rounded-lg mb-12">
                        <a href="https://daniel-martinez-countries.netlify.app/" target='_blank' rel="noreferrer">
                        <img src ={countries} alt="img" className="rounded-md h-full duration-200 hover:scale-105" />
                        </a>
                        <div>
                        <h3  className="flex justify-center text-xl md:text-2xl p-2">Countries</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio