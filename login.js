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

login.on('click',
    function() {
        login.addClass('active');
        register.removeClass('active');
        btn.text('Anmelden');
        loginActive = true;
        feedback.text('');
    }
);
register.on('click',
    function() {
        login.removeClass('active');
        register.addClass('active');
        btn.text('Registrieren');
        loginActive = false;
        feedback.text('');
    }
);

// handle login / register

const username = document.getElementById('username');
const password = document.getElementById('password');

btn.on('click',
    function(e) {
        e.preventDefault();
        e.stopPropagation();
        const usernameValue = username.value;
        const passwordValue = password.value;
        if (usernameValue && passwordValue) {
            let data = {
                username: usernameValue,
                password: passwordValue
            }
            data = JSON.stringify(data);
            if (loginActive) {
                $.post('./login.php', data,
                    function (data, status) {
                        console.log(status);

                        if(status === 'success') {
                            const message = JSON.parse(data).message;
                            console.log(message);
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
                    }
                );
            } else {
                $.post('./register.php', data,
                    function (data, status) {
                        console.log(status);
                        
                        if(status === 'success') {
                            const message = JSON.parse(data).message;
                            if(message === 'Erfolgreich registriert. Bitte melde dich an.'){
                                feedback.text(message);
                            } else {
                                feedback.text(message);
                            }
                        } else {
                            feedback.text('Ein unbekannter Fehler ist aufgetreten. Hab bitte Nachsicht mit dem Entwickler.');
                        }
                    }
                );
            }
        } else {
            feedback.text('Bitte Nutzername und Passwort eingeben.');
        }
    }
);

username.oninput = () => feedback.text('');
password.oninput = () => feedback.text('');