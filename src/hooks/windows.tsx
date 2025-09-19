import { create } from "zustand";

export type WindowState = {
  title: string;
  width: number;
  height: number;
  isMaximized: boolean;
};

interface WindowStore {
  openWindows: WindowState[];
  openWindow: (title: string, width?: number, height?: number) => void;
  closeWindow: (title: string) => void;
  isWindowOpen: (title: string) => boolean;
  resizeWindow: (title: string, width: number, height: number) => void;
  toggleMaximize: (title: string) => void;
}

export const useWindows=create<WindowStore>((set,get)=>({
    openWindows: [],
    
    openWindow: (title, width = 400, height = 300) => {
      set((state) => {
        if (state.openWindows.find(w => w.title === title)) return state;
        return { openWindows: [...state.openWindows, { title, width, height, isMaximized: false }] };
      });
    },
    closeWindow: (title) => {
      set((state) => ({
        openWindows: state.openWindows.filter((w) => w.title !== title),
      }));
    },

    isWindowOpen: (title) => get().openWindows.some((w) => w.title === title),

    resizeWindow: (title, width, height) => {
      set((state) => ({
        openWindows: state.openWindows.map((w) =>
          w.title === title ? { ...w, width, height } : w
        ),
      }));
    },

    toggleMaximize: (title) => {
      set((state) => ({
        openWindows: state.openWindows.map((w) =>
          w.title === title ? { ...w, isMaximized: !w.isMaximized } : w
        ),
      }));
    },
}))
