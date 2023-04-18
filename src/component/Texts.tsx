import { Text,Anchor } from '../styles';
import { RichText } from '../types/block';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

interface Props {
    rich_text:RichText[]
}


const Texts = ({rich_text}:Props) => {
    return <>
        {rich_text.map((e:RichText) => {
            if(e.type === 'text') {
                return e.text.link ? 
                <Anchor>
                    <a href={e.text.link.url}>
                        <Text annotations={e.annotations}>{e.text.content}</Text>
                    </a>
                </Anchor> :
                <Text annotations={e.annotations}>{e.text.content}</Text>
            } else if(e.type === 'equation') {
                return <InlineMath math={e.equation.expression}/>
            } 
            // else if(e.type === "mention") { 좀더 생각 필요
                
            // }
        })}
    </>
}

export default Texts