import styled from "styled-components"
import { EmojiTypes } from "../types/block"

const Image = styled.img`
    width:24px;
    height:24px;
`

const IconWrap = styled.span`
    width:24px;
    height:24px;
    margin-right: 8px;
`

function Icon({icon}:{icon:EmojiTypes}) {
    return <IconWrap>
            {
                icon.type === 'emoji' ? icon.emoji :
                icon.type === 'file' ? <Image src={icon.file.url}/> :
                icon.type === 'external' ? <Image src={icon.external.url}/>: ''
            }
        </IconWrap>
}

export default Icon