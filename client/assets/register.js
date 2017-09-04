$(document).ready(()=>{
  $('.ui.form').form({
    fields:{
      username:{
        identifier:'account[username]',
        rules:[
          {
            type:'empty',
            prompt:'Please enter your username'
          }
        ]
      },
      password:{
        identifier:'account[password]',
        rules:[
          {
            type:'empty',
            prompt:'Please enter your password'
          }
        ]
      },
      email:{
        identifier:'account[email]',
        rules:[
          {
            type:'empty',
            prompt:'Please enter your Email'
          }
        ]
      },
      age:{
        identifier:'account[age]',
        rules:[
          {
            type:'empty',
            prompt:'Please enter your age'
          }
        ]
      },
      password:{
        identifier:'account[password]',
        rules:[
          {
            type:'empty',
            prompt:'Please enter your password'
          }
        ]
      },
      gender:{
        identifier:'account[gender]',
        rules:[
          {
            type:'empty',
            prompt:'Please enter your gender'
          }
        ]
      }
    }
  })

})
