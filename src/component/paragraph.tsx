const Display_texts = (texts:any) => {
    return <>
        {texts.map((e:any) => <span>{e.text.content}</span>)}
    </>
}

function paragraph({texts}:any) {
    return(
        <div>
            <Display_texts/>
        </div>
    )
}

export default paragraph