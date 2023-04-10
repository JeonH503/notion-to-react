import SyntaxHighlighter from 'react-syntax-highlighter'; 
// import styled from 'styled-components';

function code({language,content}:{content:string,language:string}) {
    return <div>
        <SyntaxHighlighter language={language}>
            {content}
        </SyntaxHighlighter>
    </div>
}

export default code