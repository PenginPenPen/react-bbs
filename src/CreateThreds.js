import { render } from '@testing-library/react';
import React from 'react';
import { useState} from 'react';
import { Redirect, useNavigate, Link, } from 'react-router-dom';
function CreeateThereds(){
    const url = "https://railway.bulletinboard.techtrain.dev/threads";
    const [threadName, setThreadName] = useState('');
    const [nameError, setNameError] = useState('')
    const navigate = useNavigate();
    const handleBlur = (e) => {
        const threadName = e.target.value
        if (!threadName) {
            setNameError('required:スレッドタイトルを入力してください')
        }
    }
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const options={
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: threadName})
            };
            const response = await fetch(url, options);
            if (response.ok) {
                console.log('スレッドが作成されました:', response);
                window.location.href = '/';
            }
        }catch (error) {
            console.error('エラーが発生しました:', error);
        }
    };
    return(
        <div>
        <h1 className="CreateThredsTitle">スレッド新規作成</h1>
        <form onSubmit={handleSubmit} className="CreateThredsform">
            <input
                type='text'
                placeholder='スレッドタイトル'
                value={threadName}
                onChange={(e) => setThreadName(e.target.value)}
                onBlur={handleBlur}
            />
            {nameError && <p className='Error'>{nameError}</p>}
            <Link to="/">Topへ戻る</Link>
            <button type='submit'>作成</button>
        </form>
    </div>
    )

}

export default CreeateThereds;