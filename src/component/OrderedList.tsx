import { RichText } from "../types/block";
import Texts from "./Texts";
import { Block } from '../styles';

interface Props {
    rich_text:RichText[]
}

function OrderedList({rich_text}:Props) {
    return <Block>
        <li>
            <Texts rich_text={rich_text}/>
        </li>
    </Block>
}

export default OrderedList