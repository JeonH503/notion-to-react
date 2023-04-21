import { RichText } from '../types/block';
import 'katex/dist/katex.min.css';
import Texts from './Texts';
import styled from 'styled-components';
import { Block } from '../styles';

interface Props {
    rich_text:RichText[];
    color:string;
}

const QuoteWrap = styled(Block)`
    ${(props) => props.color && (props.color.length > 11 || props.color === 'default') 
    ? "border-left: 3px solid black" : "border-left: 3px solid "+props.color};
    &:before {
        margin-left:10px;
        content:"";
    }
`
function Quote({rich_text,color}:Props) {
    return(
        <QuoteWrap color={color}>
            <Texts rich_text={rich_text}/>
        </QuoteWrap>
    )
}

export default Quote