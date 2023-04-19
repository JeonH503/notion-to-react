import Texts from "./Texts"
import { Caption } from "../styles"
import { RichText } from "../types/block"
import styled from "styled-components"

const ImageWrap = styled.div`
    & img {
        width:100%;
    }
`

function Image({caption,url}:{caption:RichText[] | [],url:string}) {
    return <div>
        <ImageWrap>
            <img src={url} alt="image"></img>
        </ImageWrap>
        <Caption>
            <Texts rich_text={caption}/>
        </Caption>
    </div>
}

export default Image