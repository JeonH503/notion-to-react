import { RichText,EmojiTypes } from '../types/block';
import { Block } from '../styles';
import Texts from './Texts';
import styled from 'styled-components';
import Icon from './Icon';
interface Props {
    rich_text:RichText[]
    icon:EmojiTypes;
    color:string;
}

const CallOutBlock = styled(Block)`
    padding:13px;
    display:flex;
`

function Callout({rich_text,icon,color}:Props) {
    return <CallOutBlock color={color}>
        <Icon icon={icon}/>
        <Texts rich_text={rich_text}/>
    </CallOutBlock>
}

export default Callout