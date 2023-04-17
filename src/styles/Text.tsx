import styled from 'styled-components';

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

export default styled.span<Annotation>`
    ${props => props.annotations.bold && 'font-weight: bold;'}
    ${props => props.annotations.italic && 'font-style: italic;'}
    ${
        props => props.annotations.color && 
        props.annotations.color !== 'default' ? 
        `color : ${props.annotations.color};` : 
        ""
    }
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

