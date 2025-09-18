import { AGENTS, ClippyProvider } from "@react95/clippy";
import { setAuth } from "./hooks/auth";
import Login from "./components/Login";
import DesktopIcon from "./components/DesktopIcon";
import { Amovie2, Bookmark, Inetcpl1313, Mail, MediaAudio } from "@react95/icons";
import { Video } from "@react95/core";
import WindowBar from "./components/WindowBar";
import Biography from "./components/Biography";
import Contact from "./components/Contact";

function App() {
  const authenticated = setAuth((state)=>state.authenticated);
  return (
    <div style={{width:"100%",background:"#098684",minHeight:"100vh",position:"relative"}}>
      {/* Display login page if the user is unauthenticated */}
      <img src="logo.png" width={400} style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} />

      {/* Displat desktop portfolio if the user is authenticated */}
      {!authenticated && <Login/>}
      {
        authenticated && (
          <ClippyProvider agentName={AGENTS.BONZI}>
            <div className="fixed">
              {/* Desktop Icons */}
              <DesktopIcon icon={<Amovie2/>} name="PianoCat.mp4">
                <Video w={"420px"} src="keyboardcat.mp4" name="Keyboard Cat"/>
              </DesktopIcon>
              <DesktopIcon icon={<Inetcpl1313/>} name="Browser">
                <iframe title="browser" src="https://swisscows.com" style={{border:"none", width:"800px", height:"500px"}}/>
              </DesktopIcon>
              <DesktopIcon icon={<Bookmark variant="32x32_4"/>} name="Biography">
                <Biography/>
              </DesktopIcon>
              <DesktopIcon icon={<MediaAudio variant="32x32_4"/>} name="Music Player">
                <iframe title="browser" src="https://open.spotify.com/embed/track/3BeRfdDva5tTPCHPYBaGlA" style={{border:"none", width:"800px", height:"352px"}}/>
                <iframe title="browser" src="https://open.spotify.com/embed/track/0BISTkoIhYq46qtRRVjLvn" style={{border:"none", width:"800px", height:"352px"}}/>
              </DesktopIcon>
              <DesktopIcon icon={<Mail/>} name="Contact">
                <Contact/>
              </DesktopIcon>
            </div>
            <WindowBar/>
          </ClippyProvider>
        )
      }
    </div>
  )
}

export default App
