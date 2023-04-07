import styled from 'styled-components'

interface TextProps {
    bold?:boolean;
    italic?:boolean;
    strikethrough?:boolean;
    underline?:boolean;
    color?:string
}

const Text = styled.span<TextProps>`
    ${props => props.bold && 'font-weight: bold;'}
    ${props => props.italic && 'font-style: italic;'}
    ${
        props => {
            if(props.strikethrough || props.underline) {
                // let deco = 
                // return 
            } else {
                return ''
            }
        }
    }
    
`

const Block = (texts:any) => {
    return <>
        {texts.map((e:any) => <Text>{e.text.content}</Text>)}
    </>
}

function paragraph({texts}:any) {
    return(
        <div>
            <Block/>
        </div>
    )
}

export default paragraph