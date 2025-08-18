import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import Home from './pages/Home'
import Notfound from './pages/Notfound'
import New from './pages/New'
import { getEmotionImage } from './util/getEmotionImage'
import Header from './components/Header'
import Button from './components/Button'
function App() {

  <div>
    <img src={getEmotionImage(1)} alt="Emotion 1" />
    <img src={getEmotionImage(2)} alt="Emotion 2" />
    <img src={getEmotionImage(3)} alt="Emotion 3" />
    <img src={getEmotionImage(4)} alt="Emotion 4" />
    <img src={getEmotionImage(5)} alt="Emotion 5" />
  </div>



  return (
    <div>
      <Header
        leftChild={<Button text="left" />}
        title="header title"
        rightChild={<Button text="right" />}
      />



      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </div>
  )
}

export default App