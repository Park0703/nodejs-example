const mongoose = require('mongoose');

const userSchema = mongoose.Schema({ // mongoose.schema 설정
  name : {
      type : String,
      maxlength : 50 // 글자수 제한
  },
  email : {
      type : String,
      trim : true, // 여백 없애줌
      unique : 1 // 고유값
  },  
  password : {
    type : String,
    minlength : 5
  },
  lastname : {
    type : String,
    maxlength : 50
  },
  role : {
    type : Number, //관리자 숫자가 0이면
    default : 0 //기본값
  },
  image : String,
  token : {
    type : String
  },
  tokenExp :{
    type : Number
  }
})
const User = mongoose.model('User', userSchema) // mongoose.model 설정('모델의 이름', 스키마 넣기)

// 이모델을 다른 파일에서도 쓰고 싶다면?
module.exports = { User }






