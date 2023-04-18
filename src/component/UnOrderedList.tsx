import { RichText } from "../types/block";
import Texts from "./Texts";

interface Props {
    rich_text:RichText[]
}

function UnOrderedList({rich_text}:Props) {
    return <div>
        <li>
            <Texts rich_text={rich_text}/>
        </li>
    </div>
}

export default UnOrderedList