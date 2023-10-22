// show password

const show = $('#toggle-password');
const pw = $('#password');

show.on('change',
    function() {
        show.prop('checked') ? pw.prop('type', 'text') : pw.prop('type', 'password');
    }
);

// check password

let loginActive = true;
let feedback = $('#feedback');

// switch tabs

const login = $('#login');
const register = $('#register');
const btn = $('#login-btn');
const dataProtection = $('#data-protection');

login.on('click',
    function() {
        login.addClass('active');
        register.removeClass('active');
        dataProtection.removeClass('open');
        btn.text('Anmelden');
        loginActive = true;
        feedback.text('');
    }
);
register.on('click',
    function() {
        login.removeClass('active');
        register.addClass('active');
        dataProtection.addClass('open');
        btn.text('Registrieren');
        loginActive = false;
        feedback.text('');
    }
);

const dataProtectionBtn = document.getElementById('data-protection-button');
const modalDataProtection = document.getElementById('modal-data-protection');

dataProtectionBtn.onclick = e => {
    e.preventDefault();
    modalDataProtection.classList.add('open');
}

// handle login / register

const username = document.getElementById('username');
const password = document.getElementById('password');
const dataProtectionAgreement = document.getElementById('toggle-data-protection-agreement');

btn.on('click',
    async function(e) {
        e.preventDefault();
        e.stopPropagation();
        const usernameValue = username.value;
        const passwordValue = password.value;
        if (!loginActive && !dataProtectionAgreement.checked){
            feedback.text('Akzeptieren Sie bitte den Datenschutzhinweis.');
            return;
        }
        if (usernameValue && passwordValue) {
            let data = {
                username: usernameValue,
                password: passwordValue
            }
            data = JSON.stringify(data);
            if (loginActive) {
                let response = await fetch('./login.php',{
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: data        
                });
                if(response.ok) {
                    response = await response.json();
                    const message = await response.message;
                    // console.log(message);
                    if(message === 'Erfolgreich eingeloggt.'){
                        window.location.href = './chat.php';
                    } else if(message === 'Benutzername oder Passwort unbekannt.') {
                        feedback.text(message);
                    } else {
                        feedback.text('Ein unbekannter Fehler ist aufgetreten. Hab bitte Nachsicht mit dem Entwickler.');
                    }
                } else {
                    feedback.text('Ein unbekannter Fehler ist aufgetreten. Hab bitte Nachsicht mit dem Entwickler.');
                }
            } else {
                let response = await fetch('./register.php',{
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: data        
                });
                if(response.ok) {
                    response = await response.json();
                    const message = await response.message;
                    // console.log(message);
                    if(message === 'Erfolgreich registriert. Bitte melde dich an.'){
                        feedback.text(message);
                    } else {
                        feedback.text(message);
                    }
                } else {
                    feedback.text('Ein unbekannter Fehler ist aufgetreten. Hab bitte Nachsicht mit dem Entwickler.');
                }

            }
        } else {
            feedback.text('Bitte Nutzername und Passwort eingeben.');
        }
    }
);

username.oninput = () => feedback.text('');
password.oninput = () => feedback.text('');