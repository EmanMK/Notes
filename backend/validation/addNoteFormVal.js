const AddNote=(title, content, importance)=>{

    const emptyFields = []
    if(!title){
        emptyFields.push('title')
    }if(!content){
        emptyFields.push('content')
    }if(!importance){
        emptyFields.push('importance')
    }
    console.log("from validation room : " , emptyFields.join('|'))
    return emptyFields;
}

module.exports={AddNote}