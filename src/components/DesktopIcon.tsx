import React, { type ComponentType, type ReactElement, type ReactNode } from 'react'
import { useWindows } from '../hooks/windows';
import { Modal, TitleBar, useModal } from '@react95/core';

// Centralized style objects for maintainability and clarity
const styles = {
  desktopIcon: {
    alignItems: "center",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    borderRadius: "8px",
    textAlign: "center",
    width: "100px",
    gap: "10px",
  },
  iconImage: {
    height: "64px",
    marginBottom: "8px",
    width: "64px",
  },
  iconName: {
    color: "#ffffff",
    fontSize: "14px",
    margin: "0",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
    userSelect: "none",
  },
  window: {
    background: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    display: "flex",
    flexDirection: "column",
  },
  titleBar: {
    alignItems: "center",
    background: "#f0f0f0",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    cursor: "move",
    display: "flex",
    fontWeight: "bold",
    justifyContent: "space-between",
    padding: "8px",
  },
  closeButton: {
    alignItems: "center",
    background: "#ff5f56",
    border: "1px solid #e04440",
    borderRadius: "50%",
    color: "#9a0000",
    cursor: "pointer",
    display: "flex",
    fontSize: "10px",
    height: "15px",
    justifyContent: "center",
    lineHeight: "10px",
    width: "15px",
  },
  windowContent: {
    flex: "1",
    overflow: "auto",
    padding: "20px",
  },
} as const;

interface WindowsProps {
    icon: ReactElement<{variant?:string}>;
    title: string;
    children: ReactNode;
    width?: number;
    height?: number;
    onClose: ()=>void;
}

const Window = ({icon,title,children,width,height,onClose}:WindowsProps) => {
    const { minimize } = useModal();
    return (
        <SafeModal id={title} icon={icon} title={title} titleBarOptions={[<TitleBar.Minimize style={{marginBlock:"auto"}} key={"minimize"} onClick={()=>minimize(title)}/>, <TitleBar.Close style={{marginBlock:"auto"}} key={"close"} onClick={onClose}/>]}>
            <Modal.Content width={`${width}px`} height={`${height}px`} boxShadow="$in">
                {children}
            </Modal.Content>
        </SafeModal>
    )
}

interface DesktopIconProps { 
    icon: ReactElement<{variant?:string}>;
    name: string;
    children: ReactNode;
    width?: number;
    height?: number;
}

function DesktopIcon({icon,name,children,width,height}:DesktopIconProps) {
  const {openWindow, closeWindow, isWindowOpen} = useWindows();

  const isOpen = isWindowOpen(name);

  function handleDoubleClick() { openWindow(name); }
  function handleclose() { closeWindow(name); }

  return (
    <>
        <div style={styles.desktopIcon} onDoubleClick={handleDoubleClick}>
            {React.cloneElement(icon,{variant:"32x32_4"})}
            <p style={styles.iconName}>{name}</p>
        </div>
        {
            isOpen && (
                // Window component
                <Window width={width} height={height} title={name} onClose={handleclose} icon={React.cloneElement(icon,{variant:"16x16_4"})}>
                    {children}
                </Window>
            )
        }
    </>
  )
}

export default DesktopIcon

//eslint-disable-next-line
const SafeModal = Modal as unknown as ComponentType<any>;