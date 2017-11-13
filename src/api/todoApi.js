import {HttpClient} from './httpClient' 

const API  = 'http://localhost:3000/api'
const TODO_API = `${API}/todos`

const createTodo = todo => {
    return HttpClient.post(TODO_API,todo)
}

const getTodo = () => {
    return HttpClient.get(TODO_API)
}

const TodoApi = {createTodo, getTodo}

export {TodoApi}