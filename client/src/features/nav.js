import {createSlice} from "@reduxjs/toolkit";
import sublinks from "../component/Nav/data";

// const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
// const [page, setPage] = useState({ page: '', links: [] });
// const [location, setLocation] = useState({});

// User Slice
const navSlice = createSlice({
    name: 'navbar',
    initialState: {
        isSidebarOpen: true,
        isSubmenuOpen: true,
        page: { page: '', links: [] },
        location: {}
    },
    reducers: {

         openSidebar: (state) => {
          console.log(state.isSidebarOpen)
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
            state.setIsSubmenuOpen = true
          },

           closeSubmenu: (state) => {
            state.setIsSubmenuOpen = false
          }

        // Login
        // login: (state) => {
        //     state.status = true
        //     state.user = {
        //         name: 'Jhon Doe',
        //         role: 'customer',
        //         email: 'jhondoe@gmail.com',
        //         pass:'jhondoe123'
        //     }
            
        // },
        // Register
        // register: (state, action) => {
        //     let { user, email, pass } = action.payload;
        //     state.status = true
        //     state.user = {
        //         name: user,
        //         role: 'customer',
        //         email: email,
        //         pass: pass
        //     }
           
        // },
        // Logout
        // logout: (state) => {
        //     state.status = false
        //     state.user = {}
        // }
    }
})


export const { openSidebar, openSubmenu, closeSidebar, closeSubmenu } = navSlice.actions;
const navReducer = navSlice.reducer
export default navReducer
