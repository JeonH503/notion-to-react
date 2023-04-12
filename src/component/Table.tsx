import styled from "styled-components";

interface TableInfo {
    "has_column_header": boolean;
    "has_row_header": boolean;
}

const TableTag = styled.table<TableInfo>`
    border-collapse: collapse;
    border-spacing: 0;
    ${props => props.has_row_header ? `
        & tr:nth-child(1) {
            background:rgb(247, 246, 243);
            font-weight:530;
        }
    `:''}

    ${props => props.has_column_header ? `
        & td:nth-child(1) {
            background:rgb(247, 246, 243);
            font-weight:530;
        }
    `:''}

    & td {
        border: 2px solid rgb(233, 233, 231);
        min-width:110px;
        height:20px;
        padding:10px;
    }
`

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

function TableData({table_row}:any) {
    return(
        <>
            {table_row.cells.map((e:any) => {
                return <td>{ e[0] ? <Text annotations={e[0].annotations}>{e[0].text.content}</Text> : ''}</td>
            })}
        </>
    )
}

function Table({tables,table_info}:any) {
    return <div>
        <TableTag has_column_header={table_info.has_column_header} has_row_header={table_info.has_row_header}>
            <tbody>
                {
                    tables.results.map((e:any) => 
                        <tr>
                            <TableData table_row={e.table_row}/>
                        </tr>
                    )
                }
            </tbody>
        </TableTag>
    </div>
}

export default Table;