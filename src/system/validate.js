import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'
import VueNotifications from 'vue-notification'

export default (model) => {
  const errors = {}

  if(!Validator.isEmail(model.email)){
    errors.email = true
    VueNotifications.error({message: 'Не правильний формат пошти'})
  }
  if(isEmpty(model.name)){
    errors.name = true
  }
  if(isEmpty(model.message)){
    errors.message = true
  }
  if (errors.name || errors.message){
    VueNotifications.error({message: 'Заповніть усі поля'})
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}


