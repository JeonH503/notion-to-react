import SyntaxHighlighter from 'react-syntax-highlighter'; 
import { Block } from '../styles';
import { RichText } from '../types/block';
import {useState,useEffect} from 'react'
import { Caption } from '../styles';
import 'katex/dist/katex.min.css';
import Texts from "./Texts";
import styled from 'styled-components';
interface Props {
    rich_text:RichText[];
    caption:RichText[];
    language:string;
}

const HighlighterWrap = styled.div`
    & pre {
        margin-bottom:0;
        padding-bottom:0;
    }
`

function Code({rich_text,caption,language}:Props) {
    const [code, setCode] = useState("")
    
    const joinCodes = () => {
        let code = ''
        rich_text.forEach(text => {
            code = code + text.plain_text
        })

        setCode(code);
    }

    useEffect(() => {
        joinCodes()
    },[])

    return <Block>
        <HighlighterWrap>
            <SyntaxHighlighter language={language}>
                {code}
            </SyntaxHighlighter>
        </HighlighterWrap>
        <Caption>
            <Texts rich_text={caption}/>
        </Caption>
    </Block>
}

export default Code