import { RichText } from "../types/block"
import { Text,Caption,Anchor } from '../styles';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface Props {
    caption:RichText[]
}
// const BookmarkWrap = styled.div`
//     width:100%;
// `

const Texts = ({caption}:Props) => {
    return <Caption>
        {caption.map((e:RichText) => {
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
    </Caption>
}

function Bookmark({caption,url}:{caption:RichText[],url:string}) {
    return <div>
        <Anchor>
            <a href="url">
                {url}
            </a>
        </Anchor>
        <Texts caption={caption}/>
        {/* {
            caption.map((caption:RichText) => {
                return <Caption annotations={caption.annotations}>
                    {caption.text.content}
                </Caption>
            })
        } */}
        
    </div>
}

export default Bookmark