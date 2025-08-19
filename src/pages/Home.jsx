import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import DiaryList from '../components/DiaryList'
import { DiaryStateContext } from '../App'


const Home = () => {

    const data = useContext(DiaryStateContext)

    const [pivotDate, setPivotDate] = useState(new Date())

    const onIncreamentMonth = () => {
        setPivotDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1)
        )
    }
    const onDecreamentMonth = () => {
        setPivotDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1)
        )
    }

    return (
        <div>
            <Header
                leftChild={<Button text={'<'} onClick={onDecreamentMonth} />}
                title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
                rightChild={<Button text={'>'} onClick={onIncreamentMonth} />}
            />
            <DiaryList />
        </div>
    )
}

export default Home