import { type ComponentType } from 'react'
import { setAuth } from '../hooks/auth'
import { Input, Modal, TitleBar } from '@react95/core';
import { Keys } from '@react95/icons';

function Login() {
    const login = setAuth((state)=>state.login);
    return (
        <SafeModal
          dragOptions={{disabled:true}}
          title="Welcome to Windows 95"
          style={{
            position:"absolute",
            top:"50%",left:"50%",
            transform:"translate(-50%,-50%)"
            }}
          titleBarOptions={
            [<TitleBar.Help style={{marginBlock:"auto"}}/>]
          }
        >
            <Modal.Content width="560px" height="160px" boxShadow="$in">
                <div className="flex item-start justify-between gap-2" style={{padding:"10px"}}>
                    <Keys width={50} height={50}/>
                    <div className="flex flex-col gap-8">
                        <p style={{margin:"0"}}>Type a user name and password to log on to Windows.</p>
                        <div className="flex items-center gap-1">
                            <p style={{margin:"0"}}>Username:</p>
                            <Input defaultValue={"Admin"} disabled/>
                        </div>
                        <div className="flex items-center gap-2" style={{marginTop:"-20px"}}>
                            <p style={{margin:"0"}}>Password:</p>
                            <Input defaultValue={"Admin"} type="password" disabled/>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <button style={{width:"100%"}} onClick={() => login()}>OK</button>
                        <button style={{width:"100%"}}>Shut down</button>
                    </div>
                </div>

            </Modal.Content>
        </SafeModal>
    )
}

export default Login

//eslint-disable-next-line
const SafeModal = Modal as unknown as ComponentType<any>;