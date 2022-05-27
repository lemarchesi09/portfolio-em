import React from 'react'
import "./navbar.css"

export default function NavBar() {
  return (
    <div>
        <nav>
            <ul>
                <li><a href="#header">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#skills">SKILLS</a></li>
                <li><a href="#projects">PROJECTS</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </nav>
    </div>
  )
}
