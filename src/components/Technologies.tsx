const reactImage = require('../assets/React.png');
const javaScript = require('../assets/JavaScript.png');
const mongo = require('../assets/Mongodb.png');
const typeScript = require('../assets/TypeScript.png');
const postgres = require('../assets/Postgres.png');
const node = require('../assets/Node.png');
const sequilizeImg = require('../assets/sequelize.png');
const mongoose = require('../assets/mongoose.png');
const css = require('../assets/CSS.png');


const Technologies = () => {

    type Tech = {
        id: number,
        image: any,
        name: string,
        style: string
    }

    const technologies2: Tech[] = [
        {
            id: 1,
            image: javaScript,
            name: "JavaScript",
            style: "shadow-yellow-400",
        },
        {
            id: 2,
            image: reactImage,
            name: "React",
            style: "shadow-blue-400",
        },
        {
            id: 3,
            image: node,
            name: "Node JS",
            style: "shadow-green-400",
        },
        {
            id: 4,
            image: typeScript,
            name: "TypeScript",
            style: "shadow-blue-400",
        },
        {
            id: 5,
            image: postgres,
            name: "PostgresSQL",
            style: "shadow-blue-400",
        },
        {
            id: 6,
            image: mongo,
            name: "MongoDB",
            style: "shadow-green-400",
        },
        {
            id: 7,
            image: sequilizeImg,
            name: "Sequelize",
            style: "shadow-blue-400",
        },
        {
            id: 8,
            image: mongoose,
            name: "Mongoose",
            style: "shadow-orange-400",
        },
        {
            id: 9,
            image: css,
            name: "CSS",
            style: "shadow-blue-400",
        }
    ]

    return (
        <div className='bg-gradient-to-b from-gray-800 to-black w-full h-screen pt-12 md:pt-0' id="technologies">
            <div className='max-w-screen-lg my-auto mx-auto flex flex-col justify-center w-full h-full text-white pt-14 md:pt-0'>
                <div className='pt-24 md:pt-0'>
                    <p className='text-4xl font-bold -border-b-4 border-gray-500 p-2 inline'>Technologies</p>
                    <p className='py-6 pl-2'>These are the technologies i've worked with:</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {technologies2.map(t => (
                    <div key={t.id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${t.style}`}>
                        <img src={t.image} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>{t.name}</p>
                    </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Technologies