$(function () {
  $('.submit').on('click', function () {
    // 增加数据
    var data = {
      name: $('.name').val(),
      password: $('.psw').val(),
      email: $('.email').val(),
    }
    $.ajax({
      type: 'POST',
      url: 'http://120.25.197.246:3000/api/users/users0001',
      data: data,
      success: function () {
        console.log("dddd")
      }
    })
  })

  $('.query').on('click', function () {
    // 显示数据
    var data = {
    }
    $.ajax({
      type: 'POST',
      url: 'http://120.25.197.246:3000/api/users/users0002',
      data: data,
      success: function (data) {
        console.log(data)
      }
    })
  })
})