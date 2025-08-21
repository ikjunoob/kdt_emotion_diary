import React from 'react'
import './Viewer.css'
import { getEmotionImage } from '../util/getEmotionImage'


const Viewer = () => {
    const emotionId = 1
    return (
        <div className='Viewer'>
            <section className='img-section'>
                <h4>오늘의 감정</h4>
                <div className={`emotion-img-wrapper img-${emotionId}`}>
                    <img src={getEmotionImage(emotionId)} alt="emotion" />
                    <div>완전 좋음</div>
                </div>
            </section>
            <section className='content-wrapper'>
                <p>일기 내용</p>
            </section>
        </div>
    )
}

export default Viewer