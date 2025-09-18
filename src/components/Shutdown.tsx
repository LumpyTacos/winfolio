import React, { type ComponentType } from 'react'
import { Button, Fieldset, Modal, RadioButton, TitleBar } from '@react95/core';
import { setAuth } from '../hooks/auth';
import { Computer3 } from '@react95/icons';

type ShutdownOptions = "shutdown" | "restart" | "restart-incompatible";

interface ShutdownProps {
    close: ()=>void;
}

function Shutdown({close}: ShutdownProps) {
    const [selectedOption, setSelectedOption] = React.useState<ShutdownOptions>("shutdown");
    const logout = setAuth((state)=>state.logout);

    function handleConfirm() {
        if (selectedOption === "shutdown") {
            logout();
            close();
        }
        else {
            close();
        }
    }

    return (
        <div>
            <SafeModal icon={<Computer3 variant='32x32_4'/>} title={"Shut Down Windows"} style={{left:"50%", top:"50%", transform:"translate(-50%,-50%)"}} titleBarOptions={[<TitleBar.Close key={"close"} onClick={close}/>]}>
                <Modal.Content width={"400px"} height={"200px"} boxShadow="$in" style={{display:"flex", flexDirection:"column", justifyContent:"space-between", padding:"10px"}}>
                    <div style={{display:"flex", gap:"10px"}}>
                        <div className="flex items-start">
                            <Computer3 variant='32x32_4' style={{marginRight:"1rem"}}/>
                            <div style={{flexGrow:"1"}}>
                                <p style={{marginTop:"0"}}>What do you want the computer to do?</p>
                                <RadioButton name="Shutdown" value={"shutdown"} checked={selectedOption==="shutdown"} onChange={()=>setSelectedOption("shutdown")}>
                                    Shut down the computer?
                                </RadioButton>
                                <RadioButton name="Shutdown" value={"restart"} checked={selectedOption==="restart"} onChange={()=>setSelectedOption("restart")}>
                                    Restart the computer?
                                </RadioButton>
                                <RadioButton name="Shutdown" value={"restart-incompatible"} checked={selectedOption==="restart-incompatible"} onChange={()=>setSelectedOption("restart-incompatible")}>
                                    Restart the computer in MS-DOS mode?
                                </RadioButton>
                            </div>
                        </div>
                    </div>
                    <Fieldset style={{padding:".5rem", margin:".5rem"}}>
                        <div className="flex items-center justify-center gap-2">
                            <Button onClick={handleConfirm} style={{width:"90px"}}>YES</Button>
                            <Button onClick={close} style={{width:"90px"}}>NO</Button>
                            <Button style={{width:"90px"}}>HELP</Button>
                        </div>
                    </Fieldset>
                </Modal.Content>

            </SafeModal>
        </div>
    )
}

export default Shutdown

//eslint-disable-next-line
const SafeModal = Modal as unknown as ComponentType<any>;