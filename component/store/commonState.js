import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCommonStateStore = create(
  persist(
    (set) => ({
      isOpen: false,
      setIsOpen: (isOpen) => set({ isOpen }),
    }),
    {
      name: "common-state",
      getStorage: () => localStorage,
    }
  )
);
