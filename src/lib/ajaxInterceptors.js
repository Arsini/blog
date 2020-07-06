import axios from 'axios'
// 全局处理ajax请求
export default function() {
    axios.interceptors.request.use(function(request) {
        return request
    })
    axios.interceptors.response.use(function (response) {
        return response.data
    }, error => {
        return error
    })
    
}
