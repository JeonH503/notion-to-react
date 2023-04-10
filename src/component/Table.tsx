import {useEffect, useState} from 'react';
import styled from "styled-components";
import axios from 'axios';

interface TableType {
    table_width:number;
    has_column_header:boolean;
    has_row_header:boolean;
}

interface PropTypes {
    table:TableType;
    id:string;
}

function Table({table,id}:PropTypes) {
    const getTableDatas = async (id:string) => {
        let result = await axios.get(`https://api.notion.com/v1/blocks/${id}/children`,{headers: {
            Authorization: `Bearer secret_JtdV6RdpsJNiwIs871Lrzkya5Af0hFyXcDoIECGtT96`
        }})
        console.log(result)
    }

    useEffect(() => {
        getTableDatas(id)
    },[])

    return <div>

    </div>
}

export default Table;