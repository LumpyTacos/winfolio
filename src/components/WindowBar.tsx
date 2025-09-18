import React, { useEffect } from 'react';
import { useWindows } from '../hooks/windows';
import { List, TaskBar } from '@react95/core';
import { Amovie2, Computer3, Inetcpl1313, Mail, Settings, Wordpad } from '@react95/icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Shutdown from './Shutdown';

function Clock() {
    const [time, setTime] = React.useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    },[]);

    return (
        <div style={{padding:"0 10px", alignSelf:"center", fontFamily:"'MS Sans Serif',sans-serif",fontSize:"14px"}}>
            {time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        </div>
    );
}

function WindowBar() {
    const [showShutdown, setShowShutdown] = React.useState(false);
    const {openWindow} = useWindows();
    return (
    <>
        <TaskBar list={ 
            <List width={"200px"}>
                <List.Item icon={<Mail variant="32x32_4" />}>
                <List width={"200px"}>
                    <List.Item icon={<FaGithub size={16} />}>
                        <a href="https://github.com/lumpytacos" target="_blank" style={{ textDecoration: 'none', color: '#222', fontFamily: 'MS Sans Serif' }}>GitHub</a>
                    </List.Item>
                    <List.Item icon={<FaLinkedin size={16} />}>
                        <a href="https://linkedin.com/in/kevinylam" target="_blank" style={{ textDecoration: 'none', color: '#222', fontFamily: 'MS Sans Serif' }}>LinkedIn</a>
                    </List.Item>
                    <List.Item icon={<Mail variant="16x16_4" />}>
                        <a href="mailto:kevinlam718@gmail.com" style={{ textDecoration: 'none', color: '#222', fontFamily: 'MS Sans Serif' }}>Gmail</a>
                    </List.Item>
                </List>
                Contact
                </List.Item>
                {/* <List.Item onClick={() => openWindow("Game")} icon={<Joy102 variant="32x32_4"/>}>Game</List.Item> */}
                <List.Item icon={<Settings variant="32x32_4"/>}>Settings</List.Item>
                <List.Item onClick={() => openWindow("Browser")} icon={<Inetcpl1313 variant="32x32_4"/>}>Browser</List.Item>
                <List.Item onClick={() => openWindow("Video")} icon={<Amovie2 variant="32x32_4"/>}>Video</List.Item>
                <List.Item onClick={() => openWindow("Resume")} icon={<Wordpad variant="32x32_4"/>} >Resume</List.Item>
                <List.Divider/>
                <List.Item onClick={() => setShowShutdown(true)} icon={<Computer3 variant="32x32_4"/>}>Shut Down...</List.Item>
            </List>}>
            <Clock/>
        </TaskBar>
        {showShutdown && <Shutdown close={()=>setShowShutdown(false)}/>}
    </>
    );
}

export default WindowBar;