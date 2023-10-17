// description

const description = document.getElementById('description');
const saveDescription = document.getElementById('save-description');
const descriptionFeedback = document.getElementById('descrition-feedback');

saveDescription.onclick = async e => {
    e.preventDefault();
    const message = description.value;
    let data = {
        message: message
    }
    data = JSON.stringify(data);
    let response = await fetch('../profile-description.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: data
    });
    console.log(response);
    if (response.ok) {
        response = await response.json();
        console.log(response.message);
        descriptionFeedback.innerText = response.message;
    }
}

// handle passwords

const show = $('#toggle-password');
const oldpw = $('#old-password');
const newpw = $('#new-password');
const savepw = document.getElementById('save-new-password');
const passwordFeedback = document.getElementById('password-feedback');

show.on('change',
    function() {
        show.prop('checked') ? oldpw.prop('type', 'text') : oldpw.prop('type', 'password');
        show.prop('checked') ? newpw.prop('type', 'text') : newpw.prop('type', 'password');
    }
);

savepw.onclick = async e => {
    e.preventDefault();
    oldpwValue = oldpw.val();
    newpwValue = newpw.val();

    let data = {
        oldpw: oldpwValue,
        newpw: newpwValue
    }
    data = JSON.stringify(data);
    let response = await fetch('../profile-password.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: data
    });
    console.log(response);
    if (response.ok) {
        response = await response.json();
        console.log(response);
        passwordFeedback.innerText = response.message;
    }
}

// delete account

const deleteAccount = document.getElementById('delete-account');
const deleteAccountConfirmation = document.getElementById('delete-account-confirmation');
const deleteModal = document.getElementById('delete-modal');

deleteAccount.onclick = e => {
    e.preventDefault();
    deleteModal.classList.add('open');
}
deleteAccountConfirmation.onclick = async () => {
    try {
        let response = await fetch('../profile-delete.php');
        if (response.ok) {
            response = await response.json();
            console.log(response);
            window.location.href = '../chat.php';
        }
    } catch (error) {
        console.log(error);
    }
}