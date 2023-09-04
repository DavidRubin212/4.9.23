import  { useContext } from 'react'
import { themeContext } from './App'

export default function Headline() {
    const context = useContext(themeContext)

  return (
    <h1 style = {{color:(context!.theme === 'dark' ? 'grey': 'white')}}>this is headline</h1>
  )
}
