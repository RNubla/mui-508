
import { create, StateCreator } from "zustand"
import { Action, UserRegisterFromData } from "../types"


const createRegisterSlice: StateCreator<UserRegisterFromData & Action> = (set) => ({
    firstName: "",
    lastName: "",
    updateFirstName: ({ firstName }) => set(() => ({ firstName: firstName }))
    // setFirstName: () => set((state) => ({firstName: state.firstName = }))
})

export const useBoundRegisterFormStore = create<UserRegisterFromData & Action>()((...a) => ({
    ...createRegisterSlice(...a)
}))