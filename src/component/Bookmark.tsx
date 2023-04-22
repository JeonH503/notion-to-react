import { RichText } from "../types/block"
import { Caption,Anchor } from '../styles';
import 'katex/dist/katex.min.css';
import Texts from "./Texts";
import { Block } from '../styles';

function Bookmark({caption,url}:{caption:RichText[],url:string}) {
    return <Block>
        <Anchor>
            <a href={url}>
                {url}
            </a>
        </Anchor>
        <Caption>
            <Texts rich_text={caption}/>
        </Caption>
        {/* {
            caption.map((caption:RichText) => {
                return <Caption annotations={caption.annotations}>
                    {caption.text.content}
                </Caption>
            })
        } */}
        
    </Block>
}

export default Bookmark