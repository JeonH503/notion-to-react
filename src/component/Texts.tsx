import { Text,Anchor } from '../styles';
import { RichText } from '../types/block';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

interface Props {
    rich_text:RichText[]
}


const Texts = ({rich_text}:Props) => {
    return <>
        {rich_text.map((e:RichText,i) => {
            if(e.type === 'text') {
                return e.text.link ? 
                <Anchor key={i}>
                    <a href={e.text.link.url}>
                        <Text annotations={e.annotations}>{e.text.content}</Text>
                    </a>
                </Anchor> :
                <Text key={i} annotations={e.annotations}>{e.text.content}</Text>
            } else if(e.type === 'equation') {
                return <InlineMath key={i} math={e.equation.expression}/>
            } 

            return null;
        })}
    </>
}

export default Texts