import {useEffect, useState} from 'react';
import styled from "styled-components";
import axios from 'axios';


function TableData({table_row}:any) {
    console.log(table_row)
    return(
        <>
            {table_row.cells.map((e:any) => {
                console.log(e)
                return <td>{e[0]?.text.content}</td>
            })}
            
        </>
    )
}

function Table({tables}:any) {
    return <div>
        <table>
            <tbody>
                {
                    tables.results.map((e:any) => 
                        <tr>
                            <TableData table_row={e.table_row}/>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
}

export default Table;