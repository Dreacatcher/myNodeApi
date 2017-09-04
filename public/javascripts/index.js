$(function(){
  var data={
    title:'aaaa',
    post:'bbbbb'
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