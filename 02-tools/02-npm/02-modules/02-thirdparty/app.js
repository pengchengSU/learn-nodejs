const axios  = require('axios')

axios.get('http://localhost:8080/user/hello')
.then(value=>{
    console.log('ss');
    console.log(value.data);
}).catch(error=>{
    console.log(error);
})