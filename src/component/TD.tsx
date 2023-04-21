import { RichText, TableRow } from "../types/block"
import { Text,Anchor } from '../styles';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

function TD({table_row}:{table_row:TableRow}) {
    return(
        <tr>
            {table_row.cells.map((e:RichText[]) => {
                return <td>{e.map((v) => {
                    if(v.type === 'text') {
                        return v.text.link ? 
                        <Anchor>
                            <a href={v.text.link.url}>
                                <Text annotations={v.annotations}>{v.text.content}</Text>
                            </a>
                        </Anchor> :
                        <Text annotations={v.annotations}>{v.text.content}</Text>
                    } else if(v.type === 'equation') {
                        return <InlineMath math={v.equation.expression}/>
                    } 
                })}</td>
            })}
        </tr>
    )
}

export default TD