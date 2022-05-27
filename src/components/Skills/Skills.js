import React from 'react'
import Html from "../../assets/logohtml1.png"
import Css from "../../assets/logocss3.png"
import Js from "../../assets/jslogo.png"
import Reactlogo from "../../assets/reactlogo.png"
import Sass from "../../assets/sasslogo.png"
import Bootstrap from "../../assets/bootlogo.png"
import "./skills.css"

export default function Skills() {
  return (
    <div>
        <section id='skills' className='sec-skills'>
            <h2>
                Skills
            </h2>
            <div className="card-container">
                <button>
                    <div className='card'>
                        <img src={Html} alt="html" />
                    </div>

                </button>
                <button>
                    <div className='card'>
                        <img src={Css} alt="css" />
                    </div>

                </button>
                <button>
                    <div className='card'>
                        <img src={Js} alt="css" />
                    </div>

                </button>
                <button>
                    <div className='card'>
                        <img src={Reactlogo} alt="css" />
                    </div>

                </button>
                <button>
                    <div className='card'>
                        <img src={Sass} alt="css" />
                    </div>

                </button>
                <button>
                    <div className='card'>
                        <img src={Bootstrap} alt="css" />
                    </div>

                </button>
            </div>
        </section>
    </div>
  )
}
