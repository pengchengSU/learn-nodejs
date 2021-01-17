const _ = require('lodash')
const { builtinModules } = require('module')

function myChunk(arr){
    let arr2 = _.chunk(arr,2)
    return arr2
}

module.exports = myChunk