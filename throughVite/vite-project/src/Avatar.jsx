export function Avatar(props){
    return (
        <>
            <img src={props.src} width={props.width} height={props.height}/>
        </>
    )
}

export function DestructuredAvatar({src,width,height,children}){
    return(
        <>
        <img src={src} width={width} height={height}/>
        {children}
    </>
    )
}