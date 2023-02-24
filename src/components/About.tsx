import React from 'react';

const About = () => {
    return (
        <div className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-8'>
                Full Stack Developer con experiencia en tecnologoías como JavaScript, React JS, Node JS, Express JS y PostgresSQL. Estoy interesado en seguir aprendiendo más sobre nuevas tecnologías y adquirir habilidades que me conviertan no solo en un mejor profesional sino también en una mejor persona.
                </p>
                <br/>
                <p className='text-xl'>
                Mis principales habilidades son la capacidad de analisis y solución de problemas, disposición de trabajo en equipo y capacidad de aprendizaje.
                </p>
                <br/>
                <p className='text-xl'>
                En mi paso como estudiante universitario cursé una materia sobre programación y desde entonces me he visto atraido hacia este sector ya que ofrece una forma diferente de afrontar los retos y te mantiene actualizado del mundo que nos rodea. Despues de algunos años desempeñandome en diferentes sectores me encontré con la oportunidad de estudiar más a fondo la programación, y si bien hoy no soy un experto me he dado cuenta que es algo que me gusta hacer y de lo que quiero seguir aprendiendo.
                </p>
                <br/>
                <p className='text-xl'>
                He realizado dos proyectos como programador en los cuales he utilizado las tecnologías enumeradas anteriormente, adicional a esto he desarrollado habilidades personales como el liderazgo, trabajo en equipo y adaptabilidad.
                </p>
                <br/>
                <p className='text-xl mb-10'>
                Soy ingeniero mecánico graduado de la Univerisdad Del Norte, desde entonces he adquirido experiencia laboral en empresas como CocaCola FEMSA en el area de mantenimiento, también he trabajado como independiente en otros sectores como la inversión en mercados bursatiles, cargos administrativos y logistica de eventos masivos.
                </p>
            </div>
        </div>
    )
}

export default About;