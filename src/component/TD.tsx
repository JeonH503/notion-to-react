import { RichText, TableRow } from "../types/block"
import { Text,Anchor } from '../styles';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

function TD({table_row}:{table_row:TableRow}) {
    return(
        <tr>
            {table_row.cells.map((e:RichText[],i) => {
                return <td key={i}>{e.map((v,j) => {
                    if(v.type === 'text') {
                        return v.text.link ? 
                        <Anchor key={i+''+j}>
                            <a href={v.text.link.url}>
                                <Text annotations={v.annotations}>{v.text.content}</Text>
                            </a>
                        </Anchor> :
                        <Text key={i+''+j} annotations={v.annotations}>{v.text.content}</Text>
                    } else if(v.type === 'equation') {
                        return <InlineMath key={i+''+j} math={v.equation.expression}/>
                    }

                    return null;
                })}</td>
            })}
        </tr>
    )
}

export default TD