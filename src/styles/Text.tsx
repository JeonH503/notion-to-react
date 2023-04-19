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
        (props) => {
            if(props.annotations.color) {
                let color = props.annotations.color.split("_");
                return color.length === 1 ? `color:${color[0]}` :
                `background:${color[0]}`
            }
            

            return ''
        }
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

