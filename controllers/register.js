document.querySelector('#btnRegister').onclick = function () {
    var user = new User()
    user.email = document.querySelector('#email').value
    user.password = document.querySelector('#pass').value
    var passwordConfirm = document.querySelector('#confirm').value
    user.name = document.querySelector('#name').value
    if (document.querySelector('#male').checked) {
        user.gender = true
    }
    if (document.querySelector('#male').checked == false) {
        user.gender = false
    }
    user.phone = document.querySelector('#phone').value

    console.log('user', user)

    var valid = true

    valid &=
        checkEmpty(user.email, '#tbemail') &
        checkEmpty(user.password, '#tbpass') &
        checkEmpty(passwordConfirm, '#tbconfirm') &
        checkEmpty(user.name, '#tbname') &
        checkEmpty(user.phone, '#tbphone')

    if (checkEmpty(user.name, '#tbname')) {
        //check user từ 4 đến 6 ký tự
        valid &= checkLength(user.name, '#tbname', 'Tên', 4, 6)
        if (checkLength(user.name, '#tbname', 'Tên', 4, 6)) {
            //check name phải là ký tự
            valid &= checkLetter(user.name, '#tbname', 'Tên đăng ký ')
        }
    }

    if (checkEmpty(user.email, '#tbemail')) {
        //check mail phải đúng định dạng
        valid &= checkEmail(user.email, '#tbemail', 'Email đăng ký ')
    }

    if (checkEmpty(user.password, '#tbpass')) {
        //check password từ 6 đến 10 ký tự
        valid &= checkLength(user.password, '#tbpass', 'Mật khẩu ', 6, 10)
        if (checkLength(user.password, '#tbpass', 'Mật khẩu', 6, 10)) {
            valid &= checkPass(user.password, '#tbpass', 'Mật khẩu ')
        }
    }
    if (checkEmpty(passwordConfirm, '#tbconfirm')) {
        //check password từ 6 đến 10 ký tự
        valid &= checkLength(passwordConfirm, '#tbconfirm', 'Mật khẩu xacs nhận ', 6, 10)
        if (checkLength(passwordConfirm, '#tbconfirm', 'Mật khẩu xác nhận ', 6, 10)) {
            valid &= checkPass(passwordConfirm, '#tbconfirm', 'Mật khẩu xác nhận ')
            if(checkPass(passwordConfirm, '#tbconfirm', 'Mật khẩu xác nhận ')){
                valid &=checkConfirm(user.password,passwordConfirm, '#tbconfirm', 'Mật khẩu xác nhận ')
            }
        }
    }
    if(checkEmpty(user.phone, '#tbphone'))
    {
        valid &= checkNumber(user.phone,"#tbphone","Số điện thoại đăng ký ");
    }

    if (!valid) {
        return
    }

    swal({
        title: 'Are you sure?',
        text: 'Bạn có chắc muốn đăng ký này không ?',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            swal('Tài khoản của bạn đã được lưu vào hệ thống :)', {
                icon: 'success',
            })
            var promise = axios({
                url: 'https://shop.cyberlearn.vn/api/Users/signup',
                method: 'POST',
                //responseType:'JSON',
                data: user,
            })

            promise.then(function (result) {
                console.log(result.data)
                // console.log("WIN");
            })

            promise.catch(function (error) {
                console.log(error)
            })
        } else {
            swal('Bạn đã hủy đăng ký tài khoản này :(')
        }
    })
}
