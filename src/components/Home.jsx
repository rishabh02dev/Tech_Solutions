import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle,AiFillYoutube, AiFillInstagram}
 from "react-icons/ai";

const Home = () => {
  return  (
    <>
    <div className='home' id='home'>
        <main>
            <h1>TechStar</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>
    <div className='home2'>
        <img src ={vg} alt='graphics' />
        <div>
        <p>
            We are your one and only solution to the tech problems you face
            everyday. We are leading tech company whose aim is to increase the problem solving ability in children.
        </p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Who we you?</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veritatis placeat, assumenda officia corrupti, velit laborum nisi tempora debitis quaerat delectus deserunt sunt maiores cum voluptate vero consectetur repellat. Provident asperiores animi similique non quisquam, eum ipsam aut eos sint repellat laborum atque commodi aperiam ut? Vero quasi provident dolores hic ea accusantium ullam, natus facere voluptas consequuntur voluptate nam. Dicta aliquam minus recusandae quaerat nihil repellendus harum cum quidem ex inventore a, aut assumenda autem illum sint esse enim vitae delectus repellat, accusamus voluptatem rerum in quas. Consequuntur reprehenderit ullam commodi ad modi veritatis sit, adipisci sint? Delectus, accusantium?
            </p>
        </div>
    </div>
    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{
                    animationDelay: "0.3s",
                }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{
                    animationDelay: "0.5s",
                }}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div style={{
                    animationDelay: "0.7s",
                }}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
                <div style={{
                    animationDelay: "1s",
                }}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home