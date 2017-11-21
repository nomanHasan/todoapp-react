import axios from 'axios'


exports.getTodos = async function(page, limit){
    return await axios
    .get('http://localhost:3000/api/todos')
}