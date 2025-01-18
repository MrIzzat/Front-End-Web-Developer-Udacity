import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

console.log(checkForName);

//alert("I EXIST")
console.log("CHANGE!!");

const onBlur = function(){
    console.log("Inside onBlur()")
}


export {
    checkForName,
    handleSubmit,
    onBlur,
}