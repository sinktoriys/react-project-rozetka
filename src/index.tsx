import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
type TitleProps = {
    title: string
}
const Title = ({ title }: TitleProps) => {
    return <h1>Hello {title} component</h1>
}
const Content = () => {
    return (
        <React.Fragment>
            <p className="red">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi et excepturi repudiandae, recusandae obcaecati tempore
                suscipit facilis mollitia sapiente vitae a molestias placeat
                repellat ipsa dolore rem, dolor sit. Provident.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi et excepturi repudiandae, recusandae obcaecati tempore
                suscipit facilis mollitia sapiente vitae a molestias placeat
                repellat ipsa dolore rem, dolor sit. Provident.
            </p>
        </React.Fragment>
    )
}
const App = () => {
    return (
        <div>
            <Title title="App" />
            <Title title="React" />
            <Content />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
