import { RichText } from '../types/block';
import 'katex/dist/katex.min.css';
import Texts from './Texts';

interface Props {
    rich_text:RichText[];
    color:string;
}

function Paragraph({rich_text}:Props) {
    return(
        <div>
            <Texts rich_text={rich_text}/>
        </div>
    )
}

export default Paragraph