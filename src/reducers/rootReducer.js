import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    activeTab: "html",
    codeTabs: {
        html: JSON.parse(localStorage.getItem("html")),
        css: JSON.parse(localStorage.getItem("css")),
        js: JSON.parse(localStorage.getItem("js"))
    }
}



export const slice = createSlice({
    name: "slicer",
    initialState,
    reducers: {
        setActiveTab: (state, action) => {
            state.activeTab = action.payload
        },
        setHtml: (state, action) => {
            localStorage.setItem("html",JSON.stringify(action.payload));
            state.codeTabs.html = action.payload
        },
        setCss: (state, action) => {
            localStorage.setItem("css",JSON.stringify(action.payload));
            state.codeTabs.css = action.payload
        },
        setJs: (state, action) => {
            localStorage.setItem("js",JSON.stringify(action.payload));
            state.codeTabs.js = action.payload
        }
    }
})


export const { setActiveTab, setHtml, setCss, setJs } = slice.actions;


export default slice.reducer


