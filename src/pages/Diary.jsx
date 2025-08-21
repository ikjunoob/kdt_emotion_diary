import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Button from '../components/Button'
import Viewer from '../components/Viewer'


const Diary = () => {
    const { id } = useParams()
    const nav = useNavigate()

    return (
        <div>
            <Header
                leftChild={<Button
                    text={'뒤로 가기'}
                    onClick={() => nav(-1)}
                />}
                title={'yyyy-mm-dd 의 기록'}
                rightChild={<Button 
                    text={'수정 가기'} 
                    onClick={()=>nav(`/edit/${id}`)}
                    />}
            />
            <Viewer />
        </div>
    )
}

export default Diary