import { createRoot } from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Github, {githubInfoLoader} from './components/Github/Github'
import Home from './components/Home/Home'
import User from './components/User/User'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route loader={githubInfoLoader} path='github' element={<Github/>}/>
      <Route path='user/' element={<User/>}>
        <Route path=':userId' element={<User/>}/>
      </Route>
      <Route path='*' element={<h1>Page not found: 404</h1>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}/>

)
