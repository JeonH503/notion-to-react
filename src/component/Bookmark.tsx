import { RichText } from "../types/block"
import { Caption,Anchor } from '../styles';
import 'katex/dist/katex.min.css';
import Texts from "./Texts";

function Bookmark({caption,url}:{caption:RichText[],url:string}) {
    return <div>
        <Anchor>
            <a href="url">
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
        
    </div>
}

export default Bookmark