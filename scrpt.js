const user = document.getElementById('un')
const pass = document.getElementById('pw')

function csub(){
    if (user.value == 'a' && pass.value == 'a'){
        document.getElementById('su').href = 'https://irfanshadik.live'
    } else {
        //alert('Wrong Credentials')
        document.getElementById('notifi').innerHTML = 'Wrong Values';
    }
}