import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useReducer, useRef, createContext, useEffect } from 'react'
import Home from './pages/Home'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import New from './pages/New'
import Notfound from './pages/Notfound'

const mockData = [
  { id: 1, createdDate: new Date('2025-08-17').getTime(), emotionId: 1, content: "1번 일기 내용" },
  { id: 2, createdDate: new Date('2025-07-05').getTime(), emotionId: 2, content: "2번 일기 내용" },
  { id: 3, createdDate: new Date('2025-09-05').getTime(), emotionId: 3, content: "3번 일기 내용" },
  { id: 4, createdDate: new Date('2025-06-05').getTime(), emotionId: 4, content: "4번 일기 내용" },
  { id: 5, createdDate: new Date('2025-07-10').getTime(), emotionId: 5, content: "5번 일기 내용" },
  { id: 6, createdDate: new Date('2024-12-05').getTime(), emotionId: 1, content: "6번 일기 내용" },
  { id: 7, createdDate: new Date('2025-08-12').getTime(), emotionId: 2, content: "1번 일기 내용" },
  { id: 8, createdDate: new Date('2025-08-19').getTime(), emotionId: 3, content: "1번 일기 내용" },
]

function reducer(state, action) {
  switch (action.type) {
    case 'INIT':
      return action.data
    case 'CREATE':
      return [action.data, ...state]
    case 'UPDATE':
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      )
    case 'DELETE':
      return state.filter((item) => String(item.id) !== String(action.id))
    default:                 // ✅ 오타 수정
      return state
  }
}

export const DiaryStateContext = createContext()
export const DiaryDispatchContext = createContext()

function App() {
  const [data, dispatch] = useReducer(reducer, [])
  const nextId = Math.max(...mockData.map(d => d.id)) + 1
  const idRef = useRef(nextId) // ✅ 새 ID 시작점

  useEffect(() => {
    dispatch({ type: 'INIT', data: mockData })
  }, []) // ✅ 의존성 배열은 useEffect 두번째 인자로

  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    })
  }

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: { id, createdDate, emotionId, content },
    })
  }

  const onDelete = (id) => {
    dispatch({ type: 'DELETE', id })
  }

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/diary/:id' element={<Diary />} /> {/* ✅ 소문자 */}
          <Route path='/edit/:id' element={<Edit />} />   {/* ✅ 소문자 */}
          <Route path='/new' element={<New />} />         {/* ✅ 소문자 */}
          <Route path='*' element={<Notfound />} />
        </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  )
}

export default App
