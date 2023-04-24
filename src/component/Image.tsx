import Texts from "./Texts"
import { Caption } from "../styles"
import { RichText } from "../types/block"
import styled from "styled-components"
import { Block } from '../styles';

const ImageWrap = styled.div`
    & img {
        width:100%;
    }
`

function Image({caption,url}:{caption:RichText[] | [],url:string}) {
    return <Block>
        <ImageWrap>
            <img src={url} alt="notion-img"></img>
        </ImageWrap>
        <Caption>
            <Texts rich_text={caption}/>
        </Caption>
    </Block>
}

export default Image