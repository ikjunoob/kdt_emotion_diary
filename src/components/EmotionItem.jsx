import React from 'react'
import './EmotionItem.css'
import { getEmotionImage } from '../util/getEmotionImage'

const EmotionItem = ({ emotionId, emotionName, isSelected = false, onClick }) => {
    return (
        <div
            className={`EmotionItem ${isSelected ? `item_on_${emotionId}` : ''}`}
            onClick={onClick}
        >
            <img src={getEmotionImage(emotionId)} alt={emotionName} />
            <div>{emotionName}</div>
        </div>
    )
}

export default EmotionItem
