interface ObjectPropComponentProps {
    objectMessage: string,
    objectBoolean: boolean
}

const ObjectPropComponent = ({ objectMessage}: ObjectPropComponentProps) => {
    return (
        <>
            <h2>Component</h2>
            <h3>Prop message</h3>
            {objectMessage &&
                <p>{objectMessage}</p>
            }
            {/* <h3>prop boolean</h3>
            {objectBoolean
            ? <img src={imgTrue} />
            : <img src={imgFalse} />
        } */}
        </>
    )
}

export default ObjectPropComponent
