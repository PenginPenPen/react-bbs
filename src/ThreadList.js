import React, { useState, useEffect } from "react";
import './App.css';
import { Routes, Route, Link,  } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
export async function getThreads(setThreads) {
    try {
        const response = await fetch('https://railway.bulletinboard.techtrain.dev/threads');
        if (response.ok) {
            const data = await response.json();
            setThreads(data);
            console.log("正常です");
        }
    } catch (error) {
        console.error('エラーが発生しました:', error);
    }
}

export function GetThreadDetail(){

}

function ThreadList() {
    const [threads, setThreads] =  useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await getThreads(setThreads);
            } catch (error) {
                console.error('データの取得に失敗しました:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2 class="ThreadListh2">新着スレッド</h2>
                    {threads.map((thread) =>(
                        <ul class='ThreadList' key={thread.id}>
                            <Link to={`/thread/${thread.id}`}>
                                <li>
                                    {thread.title}
                                </li>
                            </Link>
                        </ul>
                    ))}
        </div>
    );
}

export default ThreadList;