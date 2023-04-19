import { RichText } from "../types/block";
import Texts from "./Texts";
import { Block } from "../styles";

interface Props {
    rich_text:RichText[];
    color:string;
}

function UnOrderedList({rich_text,color}:Props) {
    return <Block color={color}>
        <li>
            <Texts rich_text={rich_text}/>
        </li>
    </Block>
}

export default UnOrderedList