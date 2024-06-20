import {createReducer} from '@reduxjs/toolkit' 

export const newsCart=createReducer({
    source:"",
    author:"",
    title:"",
    description:"",
    url:"",
    urlToImage:"",
    content:""
},
(builder)=>{
    builder
    .addCase('addToNewsCart',(state,action)=>{
        const news=action.payload;
        state.author=news.author;
        state.source=news.source;
        state.title=news.title;
        state.description=news.description;
        state.url=news.url;
        state.urlToImage=news.urlToImage;
        state.content=news.content
    })
})