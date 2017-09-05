$(function(){
  var data={
    name:'lucm_test1',
    password:'psw123',
    email:'13566@qq.com',
  }
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/users/users0001',
    data: data,
    success: function(){
      console.log("dddd")
    }
  })
})