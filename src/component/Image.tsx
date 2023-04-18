import Texts from "./Texts"
import { Caption } from "../styles"
import { RichText } from "../types/block"

function Image({caption,url}:{caption:RichText[] | [],url:string}) {
    return <div>
        <div>
            <img src={url} alt="image"></img>
        </div>
        <Caption>
            <Texts rich_text={caption}/>
        </Caption>
    </div>
}

export default Image