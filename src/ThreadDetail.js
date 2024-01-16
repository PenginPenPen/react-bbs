import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";



export function ThreadDetail(){
    const [posts, setPosts] = useState([])
    let {threadId} = useParams();
    async function getPosts(){
        try{
            const response = await fetch('https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts')
            if (response.ok) {
                const data = await response.json();
                setPosts(data);
                console.log("正常です");
            }
        }catch(error){
            console.error('エラーが発生しました:', error);
        }
    }
    getPosts();
    return(
        <div>
            <h1>Thread ID:{threadId}</h1>
        </div>
    )
}