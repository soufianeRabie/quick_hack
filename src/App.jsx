import { useState } from 'react'
import './App.css'
import { RouterProvider} from "react-router-dom";
import router from "./router/index.jsx";
import {ThemeProvider} from "@/components/theme-provider.jsx";
import {Toaster} from "@/components/ui/sonner.jsx";

function App() {

  return (
    <>
        <ThemeProvider >
         <RouterProvider router={router}/>
            <Toaster/>
        </ThemeProvider>
    </>
  )
}

export default App
