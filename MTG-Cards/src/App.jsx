import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './assets/components/header'
import MiApi from './assets/components/MiApi'
import Filter_Color from './assets/components/Filter'
import Search_Card from './assets/components/search'

function App() {
  const [card_data, setcard_data] = useState([])
  const [text_search, setText_search]=useState("circle");
  const [card_color, setCard_color]=useState("")
  return (
    <>
        <Header/>
      <div className='interactive_elements'>
        <Filter_Color Card_Color={card_color} SetCard_Color={setCard_color}/>
        <Search_Card text_search={text_search} setText_search={setText_search}/>
      </div>
      <MiApi card_data={card_data} setcard_data={setcard_data} text_search={text_search} card_color={card_color}/>
    </>
  )
}

export default App
