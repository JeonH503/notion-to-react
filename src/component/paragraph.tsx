import styled from 'styled-components'

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

function paragraph({rich_text}:any) {
    return(
        <div>
            <Texts rich_text={rich_text}/>
        </div>
    )
}

export default paragraph