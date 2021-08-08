/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import TodoList from '../Components/TodoList'
import Todos from '../Components/Todos'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { getTodo } from '../redux/todos/action'

const Home = () => {
    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()


    if (!isAuth) {
        return <Redirect to="/Login" />
    }

    useEffect(() => {
        dispatch(getTodo())
    }, [dispatch])

    return (
        <div>

            <Todos />
            <TodoList />
        </div>
    )
}

export default Home
