import styled from "styled-components"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'   
import { RichText } from "../types/block"
import {useState, useEffect} from 'react';
import axios from "axios";

const BookmarkWrap = styled.div`
    width:100%;
    border:1px solid rgba(55, 53, 47, 0.16);
    display:flex;
`

const TextBox = styled.div`
    margin:5px;
    width:60%;
`

const ImgBox = styled.div`
    width:40%;
`

interface UrlData {
    title:string;
    desc:string;
    logo:string;
    img:string;
}

function Bookmark({caption,url}:{caption:RichText[],url:string}) {
    const [urlData, setUrlData] = useState({} as UrlData);

    const getUrlData = (url:string) => {
        axios.get(url).then(res => {
            console.log(res)
        })
    }

    useEffect(() => {
        getUrlData('https://google.com')
    })

    return <BookmarkWrap>
        <TextBox>
            
            {/* <Skeleton/>
            <Skeleton/> */}
        </TextBox>
        <ImgBox>
            {/* <Skeleton/> */}
        </ImgBox>
    </BookmarkWrap>
}

export default Bookmark