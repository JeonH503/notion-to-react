import { ReactNode } from "react"
import { RichText } from "../types/block";
import Texts from "./Texts";

interface Props {
    rich_text:RichText[]
    size:number;
    color:string;
}

const HeadingText = ({size,children}:{children:ReactNode,size:number}) => {
    if(size === 1)
        return <h1>{children}</h1>
    else if(size === 2)
        return <h2>{children}</h2>
    else if(size === 3)
        return <h3>{children}</h3>
    else if(size === 4)
        return <h4>{children}</h4>
    return <>{children}</>
}

function Heading({rich_text,size}:Props) {
    return(
        <div>
            <HeadingText size={size}>
                <Texts rich_text={rich_text}/>
            </HeadingText>
        </div>
    )
}

export default Heading