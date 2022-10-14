import {createSlice} from "@reduxjs/toolkit";
import sublinks from "../component/Nav/data";

// Settings Slice
const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        isSidebarOpen: false,
        isSubmenuOpen: false,
        page: { page: '', links: [] },
        location: {}
    },
    reducers: {
        openSidebar: (state) => {
            state.isSidebarOpen = true
          },

          closeSidebar: (state) => {
            state.isSidebarOpen = false
          },
           openSubmenu: (state, action) => {
            let {text, center, bottom} = action.payload
            const page = sublinks.find((link) => link.page === text);
            
            state.page = page;
            state.location = {center, bottom};
            state.isSubmenuOpen = true;
          },

           closeSubmenu: (state) => {
            state.isSubmenuOpen = false;
          },
    }
})

export const { openSidebar, openSubmenu, closeSidebar, closeSubmenu } = settingsSlice.actions;
const settingsReducer = settingsSlice.reducer
export default settingsReducer
