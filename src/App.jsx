import React from 'react'
import {Route, RouterProvider, createRoutesFromElements, createBrowserRouter} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import SelfDestructCreateNotePage from './pages/SelfDestructCreateNotePage'
import SelfDestructViewNotePage from './pages/SelfDestructViewNotePage'
// import { AnimatePresence } from 'motion/react'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/about' element={<AboutPage />}></Route>
      <Route path='/contact' element={<ContactPage />}></Route>
      <Route path='/self-destructing-note' element={<SelfDestructCreateNotePage />}></Route>
      <Route path='/self-destructing-note/:slug' element={<SelfDestructViewNotePage />}></Route>
      <Route path='*' element={<NotFoundPage />}></Route>
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />;
}