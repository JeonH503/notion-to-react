import { ReactNode } from "react"
import { Text } from '../styles';

const Texts = ({rich_text}:any) => {
    return <>
        {rich_text.map((e:any) => <Text annotations={e.annotations}>{e.text.content}</Text>)}
    </>
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

function Heading({rich_text,size}:any) {
    return(
        <div>
            <HeadingText size={size}>
                <Texts rich_text={rich_text}/>
            </HeadingText>
        </div>
    )
}

export default Heading