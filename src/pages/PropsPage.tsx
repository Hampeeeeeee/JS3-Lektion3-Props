import '../App.css'
import { useState } from 'react'
import MessagePropComponent from '../components/MessagePropComponent'
import ObjectPropComponent from '../components/ObjectPropComponent'
import { Link } from 'react-router-dom'

const PropsPage = () => {
    const [message, setMessage] = useState<string>("")//useState
    // second message with text and boolean
    const [objectMessage, setObjectMessage] = useState<string>("")
    const [objectBoolean, setObjectBoolean] = useState<boolean>(false)

    return (
        <>
            <h1>Props</h1>
            <Link to="/">Homepage</Link>
            <div className='message'>
                <h2>Send me a message </h2>
                <input
                    type="text"
                    placeholder='Type a message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <MessagePropComponent message={message} />
            </div>
            <div className='booleanAndMessage'>
                <h2>Send me a message + boolean</h2>
                <input
                    type="text"
                    value={objectMessage}
                    onChange={(e) => setObjectMessage(e.target.value)}
                />
                <input type="checkbox"
                    onChange={() => setObjectBoolean(!objectBoolean)}
                />
                <ObjectPropComponent objectMessage={objectMessage} objectBoolean={objectBoolean} />
            </div>
        </>
    )
}

export default PropsPage
