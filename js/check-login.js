export default async function isloggedin() {
    let loggedin = await DataService.get('is-logged-in')
    if(loggedin.loggedIn != true){
        document.querySelector('.logout').classList.add('hidden-error')
        document.querySelector('.login').classList.remove('hidden-error')
        window.location.replace('../view/login.html')

    }
    else {
        document.querySelector('.login').classList.add('hidden-error')
        document.querySelector('.logout').classList.remove('hidden-error')
    }
    return loggedin.email
}
isloggedin()