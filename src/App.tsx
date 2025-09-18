import { AGENTS, ClippyProvider } from "@react95/clippy";
import { setAuth } from "./hooks/auth";
import Login from "./components/Login";
import DesktopIcon from "./components/DesktopIcon";
import { Amovie2 } from "@react95/icons";
import { Video } from "@react95/core";

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
              <DesktopIcon icon={<Amovie2/>} name="video">
                <Video   w={"420px"} src="keyboardcat.mp4" name="Keyboard Cat"/>
              </DesktopIcon>
            </div>
          </ClippyProvider>
        )
      }
    </div>
  )
}

export default App
