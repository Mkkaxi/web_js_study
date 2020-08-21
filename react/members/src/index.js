import React from "react";  // es6 import 全面使用es6
import ReactDOM from "react-dom"
import "./styles.css"  //  global.css
// react 语法  小程序结合点
import { MyComponent } from './demo'


function App() {
  return (
    // wxml jsx
    <div className="App">
      App
      <MyComponent />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)