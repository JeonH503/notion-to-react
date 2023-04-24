import styled from "styled-components";
import { Block } from "../styles"
import { RichText } from "../types/block";
import Texts from "./Texts";

interface Props {
    rich_text:RichText[];
    color:string;
    checked:boolean
}

const Input = styled.input.attrs(props => ({
    type:"checkbox",
    checked:props.checked
}))`
    width:18px;
    height:18px;
    margin-right:6px;
    &:checked ~ * {
        opacity:0.6;
        text-decoration: line-through;
    }
`

const ToDoWrap = styled(Block)`
    display:flex;
`

function ToDo({rich_text,color,checked}:Props) {
    return <ToDoWrap color={color}>
        <Input checked={checked} readOnly/>
        <Texts rich_text={rich_text}/>
    </ToDoWrap>
}

export default ToDo