// Editor.jsx
import React, { useState } from 'react'
import "./Editor.css"
import Button from './Button'
import EmotionItem from './EmotionItem'

const emotionList = [
    { emotionId: 1, emotionName: "완전 좋음" },
    { emotionId: 2, emotionName: "좋음" },
    { emotionId: 3, emotionName: "그럭저럭" },
    { emotionId: 4, emotionName: "슬픔" },
    { emotionId: 5, emotionName: "안좋음" },
    { emotionId: 6, emotionName: "화남" },
];

const Editor = ({ onSubmit }) => {   // ✅ 부모(New)에서 내려온 onSubmit props 받기
    const [input, setInput] = useState({
        createdDate: new Date(),
        emotionId: 3,
        content: ""
    })

    const onChangeInput = (e) => {
        let name = e.target.name
        let value = e.target.value

        if (name === 'createdDate') {
            value = new Date(value)
        }

        setInput({
            ...input,
            [name]: value
        })
    }

    const onSubmitButtonClick = () => {
        if (onSubmit) {
            onSubmit(input)  // ✅ 부모에 데이터 전달
        }
    }

    return (
        <div className='Editor'>
            <section className="date-section">
                <h4>오늘의 날짜</h4>
                <input type="date" name="createdDate" onChange={onChangeInput} />
            </section>
            <section className="emotion-section">
                {emotionList.map((item) => (
                    <EmotionItem
                        key={item.emotionId}
                        {...item}
                        isSelected={item.emotionId === input.emotionId}
                        onClick={() =>
                            onChangeInput({
                                target: {
                                    name: 'emotionId',
                                    value: item.emotionId
                                }
                            })
                        }
                    />
                ))}
            </section>
            <section className="content-section">
                <h4>오늘의 일기</h4>
                <textarea
                    name="content"
                    placeholder='오늘은 어땠나요?'
                    value={input.content}
                    onChange={onChangeInput}
                />
            </section>
            <section className="button-section">
                <Button text={"취소하기"} onClick={()=>nav(-1)}/>
                <Button text={"작성완료"} type={'POSITIVE'} onClick={onSubmitButtonClick} />
            </section>
        </div>
    )
}

export default Editor
