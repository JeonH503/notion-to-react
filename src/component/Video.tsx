import { RichText } from "../types/block"
import { Block,Caption } from "../styles";
import YouTube from 'react-youtube';
import Texts from "./Texts";
import styled from "styled-components";

interface Props {
    url:string;
    type:string;
    caption:RichText[];
}

const VideoWrap = styled(Block)`
    position: relative;
    height: 0;
    width: 100%;
    padding-bottom: 56.25%;

    & iframe {
        position: absolute;
        left: 0;
        top: 0;
    }
`

function Video({url, type, caption}:Props) {
    return <VideoWrap>
        {
            type === 'external' ? <YouTube opts={{width:"100%",height:"100%"}} videoId={url.split("v=")[1]}/> : ''
        }
        <Caption>
            <Texts rich_text={caption}/>
        </Caption>
    </VideoWrap>
}

export default Video