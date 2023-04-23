import { render } from '@testing-library/react'
import React from 'react'
import { useState } from 'react'
{/*
class Counter extends Component {
    constructor (props) {
        super(props)
        this.state = {
            counter: 0,
            text:'',
        }
    }

    OnDecrement = () => {
        this.setState(prevState => ({
            counter: prevState.counter - 1,
        }))
    }
    OnIncrement = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1,
        }))
    }
    OnReset = () => {
        this.setState({
            counter: 0,
        })
    }

    changeHandler = (e) => {
        this.setState({
            text: e.target.value,
        })
    }

    render () {
        return (
            <div className='w-50 mx-auto mt-10'>
                <div className="border p-3 mt-5 d-flex flex-column gap-2">
                <p className='fs-1 text-center border'>{this.state.counter}</p>
                    <button onClick={this.OnDecrement} className='btn btn-danger'>Decrement</button>
                    <button onClick={this.OnReset} className='btn btn-info'>Reset</button>
                    <button onClick={this.OnIncrement} className='btn btn-success'>Increment</button>
                </div>
                <form className='mt-5 pb-5'>
                    <span>Text kiritish:</span>
                    <input type="text" className='form-control' onChange={this.changeHandler}/>
                    <p className='fs-5 text-center border mt-2 w-100 p-3'>{this.state.text}</p>
                </form>
            </div>
        )
    }

}
*/}

const Counter = () => {

    const [counter,setCount] = useState(0)
    const [text,setText] = useState('')

    const [active,setActive] = useState(true)

    const colors = {
        color: active ? 'green' : 'red',
    }
    const OnDecrement = () => {
        setCount(counter+1)
    }
    const OnReset = () => {
        setCount(0)
    }
    const OnIncrement = () => {
        setCount(counter-1)
    }
    const changeHandler = (e) => {
        setText(e.target.value)
    }
    const onToggle = () => {
        setActive(prevState => !prevState)
    }


    return (
        <div className='w-50 mx-auto mt-10'>
        <div className="border p-3 mt-5 d-flex flex-column gap-2">
        <p className='fs-1 text-center border ' style={colors}>
            User activeted {' '}
            {counter}
            </p>
            {/* <button onClick={OnDecrement} className='btn btn-danger'>Decrement</button>
            <button onClick={OnReset} className='btn btn-info'>Reset</button> */}
            <button onClick={OnDecrement} className='btn btn-success'>Increment</button>
            <button onClick={onToggle} className='btn btn-warning'>Toggle</button>
        </div>
        <form className='mt-5 pb-5'>
            <span>Text kiritish:</span>
            <input type="text" className='form-control' onChange={changeHandler}/>
            <p className='fs-5 text-center border mt-2 w-100 p-3'>{text}</p>
        </form>
    </div>
    )
}

export default Counter