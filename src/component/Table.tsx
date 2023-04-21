import styled from "styled-components";
import { FirstBlock,TableData,TableRows,TableRow,RichText } from "../types/block";
import TD from "./TD";

interface TableInfo {
    "has_column_header": boolean;
    "has_row_header": boolean;
}

interface Props {
    tables:FirstBlock;
    table_info:TableData
}

const TableWrap = styled.table<TableInfo>`
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

function Table({tables,table_info}:Props) {
    return <div>
        <TableWrap has_column_header={table_info.has_column_header} has_row_header={table_info.has_row_header}>
            <tbody>
                {
                    Array.isArray(tables.results) && tables.results.map((e:TableRows) => 
                        <TD table_row={e.table_row}/>
                    )
                }
            </tbody>
        </TableWrap>
    </div>
}

export default Table;