// pages/New.jsx
import React, { useContext } from 'react'
import Editor from '../components/Editor'
import Header from '../components/Header'
import Button from '../components/Button'
import { DiaryDispatchContext } from '../App'
import { useNavigate } from 'react-router-dom'

const New = () => {
    const nav = useNavigate()
    const { onCreate } = useContext(DiaryDispatchContext)

    const onSubmit = (input) => {
        onCreate(
            input.createdDate.getTime(),
            input.emotionId,
            input.content
        )
        nav('/', { replace: true })
    }

    // 뒤로가기
    const handleBack = () => {
        if (window.history.length > 1) nav(-1)
        else nav('/') // 히스토리가 없으면 홈으로
    }

    return (
        <div>
            <Header
                title={"새 일기 쓰기"}
                leftChild={<Button text={"< 뒤로가기"} onClick={handleBack} />}
            />
            <Editor onSubmit={onSubmit} />
        </div>
    )
}

export default New
