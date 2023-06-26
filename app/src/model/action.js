const SEARCHRES=(search)=>{
    return {
        type:'SEARCHRES',
        search
    }
}
const ADDCARD=(obj)=>{
    return {
        type:'ADDCARD',
        obj
    }
}
const ADDNUM=(id,index)=>{
    return {
        type:'ADDNUM',
        id,
        index
    }
}
const ADDGOODS=(obj)=>{
    return {
        type:'ADDGOODS',
        obj
    }
}
const DESC=(id,index)=>{
    return {
        type:'DESC',
        id,
        index
    }
}
const DEL=(arr)=>{
    return {
        type:'DEL',
        arr
    }
}
const DELSHOP=(arr)=>{
    return {
        type:'DELSHOP',
        arr
    }
}
const UPDATAGOODS=(obj)=>{
    return {
        type:'UPDATAGOODS',
        obj
    }
}
const DELITEM=(obj)=>{
    return {
        type:'DELITEM',
        obj
    }
}
export {
    SEARCHRES,
    ADDNUM,
    ADDCARD,
    DESC,
    DEL,
    ADDGOODS,
    DELSHOP,
    UPDATAGOODS,
    DELITEM
}