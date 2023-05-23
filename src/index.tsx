import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Title from './Title'
import Content from './Content'

const App = () => {
    return (
        <div>
            <Title title="App" />
            <Title title="React" num={1} />
            <Content
                text1="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi et excepturi repudiandae, recusandae obcaecati tempore
                suscipit facilis mollitia sapiente vitae a molestias placeat
                repellat ipsa dolore rem, dolor sit. Provident."
                text2="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi et excepturi repudiandae, recusandae obcaecati tempore
                suscipit facilis mollitia sapiente vitae a molestias placeat
                repellat ipsa dolore rem, dolor sit. Provident."
            />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
