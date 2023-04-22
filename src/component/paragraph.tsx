import { RichText } from '../types/block';
import 'katex/dist/katex.min.css';
import Texts from './Texts';
import { Block } from '../styles';

interface Props {
    rich_text:RichText[];
    color:string;
}

function Paragraph({rich_text}:Props) {
    return(
        <Block>
            <Texts rich_text={rich_text}/>
        </Block>
    )
}

export default Paragraph