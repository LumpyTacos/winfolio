import React from 'react'
import { Frame, List } from '@react95/core'
import { Mail } from '@react95/icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const contactLinks = [
    { icon:<FaGithub size={24}/>, label:"GitHub", url:"https://github.com/LumpyTacos" },
    { icon:<FaLinkedin size={24}/>, label:"LinkedIn", url:"https://www.linkedin.com/in/kevinylam/" },
    { icon:<Mail variant="32x32_4"/>, label:"Email", url:"mailto:kevinlam718@gmail.com" },
]

function Contact() {
  return (
    <Frame bg="white" boxShadow="in" style={{padding:24, minWidth:320}}>
      <h2 style={{marginTop:0, marginBlock:16, fontSize:22, color:"#222"}}>Contact me</h2>
      <List>
        {
          contactLinks.map(({icon, label, url})=>(
            <List.Item key={label} icon={icon}>
              <a href={url} target="_blank" style={{textDecoration:"none", color:"#222"}}>{label}</a>
            </List.Item>
          ))
        }
      </List>
    </Frame>
  )
}

export default Contact