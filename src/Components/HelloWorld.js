import React from 'react'

//較舊的寫法：
class HelloWorld extends React.Component {
    render() {
        return (
            <h1> Hello,{this.props.name}</h1>
        )
    }
}
//2022年的寫法：
// Functional components
// function HelloWorld(props) {
//     return <h1>Hello, {props.name}</h1>;
// }

export default HelloWorld
