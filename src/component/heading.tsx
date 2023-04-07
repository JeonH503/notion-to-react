import styled from 'styled-components'
import { ReactNode } from "react"

interface TextProps {
    bold?:boolean;
    italic?:boolean;
    strikethrough?:boolean;
    underline?:boolean;
    color?:string
}

interface Annotation {
    annotations:TextProps;
}

const Text = styled.span<Annotation>`
    ${props => props.annotations.bold && 'font-weight: bold;'}
    ${props => props.annotations.italic && 'font-style: italic;'}
    ${props => props.annotations.color !== 'default' && `color : ${props.annotations.color};`}
    ${
        props => {
            if(props.annotations.strikethrough || props.annotations.underline) {
                let deco = 'text-decoration : ';
                if(props.annotations.strikethrough)
                    deco = deco + 'line-through ';
                
                if(props.annotations.underline)
                    deco = deco+'underline';

                return deco+';'
            } else {
                return ''
            }
        }
    }
    
`

const Texts = ({rich_text}:any) => {
    return <>
        {rich_text.map((e:any) => <Text annotations={e.annotations}>{e.text.content}</Text>)}
    </>
}

const Heading = ({size,children}:{children:ReactNode,size:number}) => {
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

function heading({rich_text,size}:any) {
    return(
        <div>
            <Heading size={size}>
                <Texts rich_text={rich_text}/>
            </Heading>
        </div>
    )
}

export default heading