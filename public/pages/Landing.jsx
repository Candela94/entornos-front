import { useEffect, useState } from 'react';
import './landing.css'
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";

import { LuExpand } from "react-icons/lu";
import { RiReplyLine } from "react-icons/ri";



const Landing = () => {


    const {VITE_API} = import.meta.env
    const [content, setContent] = useState('')


    useEffect( () => {

        let controller = new AbortController()
        let options = {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            },
            signal:controller.signal
        }

        const obtenerData = async () => {


            try{

                const response = await fetch(VITE_API, options)

                if(!response.ok) {
                    throw new Error('Error en la solicitud :(((')
                }
                const data = await response.json()

                setContent(data)


            } catch (e) {
                console.error('Error al obtener datos', { cause : e})



            } finally {

                controller.abort();
                console.log('Solicitud finalizada')
            }

        }

        obtenerData();

    }, [])

    return (
        <>

            <main className="Main">
                <h1>Triage</h1>


                <section className="Seccion" style={{backgroundColor:'blue'}}>
                    <div className="Texto-intro">
                        <p className="Intro">
                            Triage is first aid for your inbox.
                        </p>

                        <p className="Intro-2">
                            Everything you loved abour the original Triage is back- only better.
                        </p>
                    </div>


                    <img src="../../public/img/1.png" alt="" className="Imagen" />
                </section>


                <section className='Seccion'style={{backgroundColor:'pink'}} >


                    <img src="../../public/img/2.png" alt="" className="Imagen" />


                    <div className="Texto-2">
                        <FiArrowLeftCircle style={{ fontSize: '30px' }} />

                        <p className="Intro-2">
                            Drag left to archive
                        </p>

                        <p className="Intro-2b">
                            Unread messages appear in a stack of cards, like this
                        </p>
                    </div>

                </section>




                <section className='Seccion' style={{backgroundColor:'black'}}>


                    <div className="Texto-2">
                        <FiArrowRightCircle style={{ fontSize: '30px' }} />

                        <p className="Intro-2">
                            Drag right to keep
                        </p>

                        <p className="Intro-2b">
                            Or create yout own custom workflow
                        </p>
                    </div>
                    <img src="../../public/img/3.png" alt="" className="Imagen" />



                </section>





                <section className='Seccion' style={{ backgroundColor: 'orange' }}>

                    <img src="../../public/img/4.png" alt="" className="Imagen" />

                    <div className="Texto-2">
                        <LuExpand style={{ fontSize: '30px' }} />

                        <p className="Intro-2">
                            Tap to expand        </p>

                        <p className="Intro-2b">
                            Open the message to view the wole thread
                        </p>
                    </div>



                </section>





                <section className='Seccion' style={{backgroundColor:'purple'}}>


                    <div className="Texto-2">
                        <RiReplyLine style={{ fontSize: '30px' }} />

                        <p className="Intro-2">
                            Replay in context        </p>

                        <p className="Intro-2b">
                            Send a quick reply without leaving the app    </p>
                    </div>


                    <img src="../../public/img/5.png" alt="" className="Imagen" />

                </section>



                <section className='Seccion'>


                    <img src="../../public/img/6.png" alt="" className="Imagen-final" />

                </section>



                <section className='Seccion'>


<img src="../../public/img/7.png" alt="" className="Imagen-final" />

</section>







            </main>

        </>
    );
}



export default Landing