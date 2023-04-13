export interface Blocks {
    object:string;
    results:Block[];
    next_cursor:string | null;
    has_more:boolean;
    type:string;

}

export interface Block {
    object:string;
    id:string;
    parent:Parent;
    created_by:Created_by;
    last_edited_by:Created_by;
    has_children:boolean;
    archived:boolean;
    type:string;
    bookmark?:Bookmark;
    breadcrumb?:BlockContent;
    bulleted_list_item?:BulletedListItem;
    callout?:Callout;
    child_database?:ChildPage;
    child_page?:ChildPage;
    column?:Column;
    column_list?:ColumnList;
    divider?:Divider;
    embed?:Embed;
    equation?:Equation;
    file?:File;
    heading_1?:Headings;
    heading_2?:Headings;
    heading_3?:Headings;
    image?:Image;
    link_preview?:LinkPreview;
    // link_to_page?:Link; 문서에 없음 ??
    numbered_list_item?:Numberedlistitem;
    paragraph?:Paragraph;
    pdf?:PDF;
    quote?:Quote;
    // synced_block?:BlockContent;
    table?:Table;
    table_of_contents?:TableOfContents;
    table_row?:TableRows;
    to_do?:ToDo;
    toggle?:ToggleBlocks;
    // unsupported?:BlockContent;
    video?:Video;
    code?:Code;
}

export interface Code {
    caption: RichText[];
    rich_text: RichText[];
    language: string;
}

export interface TableContent {
    table_width: number;
    has_column_header: boolean;
    has_row_header: boolean;
}

export interface Parent {
    type:string;
    page_id:string;
}

export interface Created_by {
    object:string;
    id:string;
}

export interface BlockContent {
    rich_text: RichText[];
    is_toggleable: boolean;
    color: string;
}

export interface RichText {
    type: string;
    text: {
        content: string;
        link: null | {
            url: string
        };
    };
    annotations: Annotations;
    plain_text: string;
    href: string | null;
}

export interface Annotations {
    bold?:boolean;
    italic?:boolean;
    strikethrough?:boolean;
    underline?:boolean;
    color?:string
}




export interface RichText {
    type: string;
    text: {
        content: string;
        link: null | {
            url: string
        };
    };
    annotations: Annotations;
    plain_text: string;
    href: string | null;
}

export interface Bookmark {
    caption: RichText[];
    url: string;
}

export interface Breadcrumb { //빈객체임
}

export interface BulletedListItem {
    rich_text: RichText[];
    color: string;
    children?: Block[];
}

export interface Callout {
    rich_text: RichText[];
    color: string;
    icon: {emoji:string};
}

export interface ChildDatabase {
    child_database:{title:string};
}

export interface ChildPage {
    child_database:{title:string};
}

export interface Code {
    caption: RichText[];
    rich_text: RichText[];
    language: string;
}

export interface ColumnList { //빈 객체
}

export interface Column { //빈 객체
}

export interface Divider { //빈 객체
}

export interface Embed {
    url:string;
}

export interface Equation {
    expression:string;
}

export interface File {
    caption: RichText[];
    type: string;
    external: {
        url: string;
    };
}

export interface Headings {
    rich_text: RichText[];
    color: string;
    is_toggleable: boolean;
}

export interface Image {
    type: string;
    external?: {
        url: string;
    };
    file?: {
        url:string,
        expiry_time:string;
    }
}

export interface LinkPreview {
    link_preview: {
        url: string;
    }
}

export interface Mention {
    page: {
      id: string
    }
}

export interface Numberedlistitem {
    rich_text:RichText[];
    color:string;
}

export interface Paragraph {
    rich_text:RichText[];
    color:string;
}

export interface PDF {
    type: string;
    external?: {
        url: string;
    };
    file?: File;
}

export interface Quote {
    rich_text:RichText[];
    color:string;
}

// export interface Syncedblock {
//     rich_text:RichText[];
//     color:string;
// }

export interface Table {
    table_width: number;
    has_column_header: boolean;
    has_row_header: boolean;
}

export interface TableRows {
    cells:RichText[][];
}

export interface TableOfContents {
    color:string;
}

export interface ToDo {
    rich_text: RichText[];
    checked: boolean;
    color: string;
    children:Block[];
}

export interface ToggleBlocks {
    rich_text: RichText[];
    color: string;
    children:Block[];
}

export interface Video {
    type: string;
    external?: {
        url: string;
    };
    file?: File;
}