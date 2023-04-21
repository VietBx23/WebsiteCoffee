function check() {
    let result = true;

    var maSv = document.getElementById("ma").value;
    var ten = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementsByName("gender");
    var hobbies = document.getElementsByName("hobbies");
    var opt = document.getElementById("option").value;
    var notepate = document.getElementById("note").value;
    var email_eCheck = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    let count = 0;
    if (maSv.length == 0 || maSv=="null") {
        document.getElementById("ma").style.backgroundColor = "yellow";
        document.getElementById("ma-empty").innerHTML = "vui lòng nhập mã sinh viên";
        document.getElementById("ma-empty").style.display = "block";
        result = false;
    }else if(maSv.length > 7){
        document.getElementById("ma").style.backgroundColor = "yellow";
        document.getElementById("ma-empty").innerHTML = "Mã Sinh Viên Chỉ Có 7 Ký Tự";
        document.getElementById("ma-empty").style.display = "block";
        result = false;
    }
    if (ten.length == 0) {
        document.getElementById("name").style.backgroundColor = "yellow";
        document.getElementById("name-empty").innerHTML = "vui lòng nhập họ và tên";
        document.getElementById("name-empty").style.display = "block";
        result = false;
    } else if(ten.length > 30){
        document.getElementById("name").style.backgroundColor = "yellow";
        document.getElementById("name-empty").innerHTML = "Tên Quá Dài _ Vui Lòng Kiểm Tra lại!";
        document.getElementById("name-empty").style.display = "block";
        result = false;
    }
    if (email.length == 0) {
        document.getElementById("email").style.backgroundColor = "yellow";
        document.getElementById("email-empty").innerHTML = "Vui lòng nhập email";
        document.getElementById("email-empty").style.display = "block";
        result = false;
    } else if(!email_eCheck.test(email)){
        document.getElementById("email").style.backgroundColor = "yellow";
        document.getElementById("email-empty").innerHTML = "Bạn Nhập Sai Cú Pháp Email";
        document.getElementById("email-empty").style.display = "block";
        result =false;
    }

    if (!gender[0].checked && !gender[1].checked) {
        document.getElementById("gioitinh-empty").innerHTML = "vui lòng chọn giới tính";
        document.getElementById("gioitinh-empty").style.display = "block";
        result = false;
    } else {
        document.getElementById("gioitinh-empty").style.display = "none";
    }

    for (let i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked) {
            count++;
        }
    }
    if (count < 1) {
        document.getElementById("hobbies-empty").innerHTML = "Phải Chọn Ít Nhất 1 Sở Thích"
        document.getElementById("hobbies-empty").style.display = "block";
        result = false;
    }
    else{
        document.getElementById("hobbies-empty").style.display = "none";
    }
    if (opt.length == 0) {
        document.getElementById("option-empty").innerHTML = "Vui Lòng Chọn Quốc Tịch";
        document.getElementById("option-empty").style.display = "block";
        result = false;
    }else{
        document.getElementById("option-empty").style.display = "none";
    }



    if (notepate.length == 0) {
        document.getElementById("note").style.backgroundColor="yellow";
        document.getElementById("note-empty").innerHTML = "Vui lòng điền vào ghi chú!";
        document.getElementById("note-empty").style.display = "block";
        result = false;
    }
    else if(notepate.length >=200){
        document.getElementById("note").style.backgroundColor="yellow";
        document.getElementById("note-empty").innerHTML = "Ghi Chú Ít Hơn 200 Ký Tự";
        document.getElementById("note-empty").style.display = "block";
        result = false;
    }
  
    return result;  
    alert("chúc mừng bạn đã đăng ký thành công tài khoản!");
}
function hien_thi(check) {
    var other_hobbies = document.getElementById("other_hobbies");
    other_hobbies.style.display = check ? "" : "none";
}