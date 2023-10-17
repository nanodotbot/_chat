// post data

const message = document.getElementById('message');

const handleChat = async () => {
    const messageValue = message.value;
    let data = {
        message: messageValue
    };
    data = JSON.stringify(data);
    let response = await fetch('./chat-post.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: data
    });
    console.log(response);
    if (response.ok) {
        response = await response.json();
        console.log(response);
    }
    location.reload()
    message.value = '';
}

$('#message').on('keypress',
    function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleChat();
        }
    }
);
$('#send').on('click',
    function(e) {
        e.preventDefault();
        e.stopPropagation();
        handleChat()
    }
);


// delete post

const deleteButtons = document.querySelectorAll('.post-delete');
const deleteModal = document.getElementById('delete-modal');

deleteButtons.forEach((button, index) => {
    button.onclick = () => {
        const deletePostButton = document.getElementById('delete-post-confirmation');
        const printInfo = document.getElementById('post-info');
        const id = button.getAttribute('data-id');
        const message = button.getAttribute('data-message');
        printInfo.innerText = '«' + message.substring(0, 25) + '»';
        deleteModal.classList.add('open');

        deletePostButton.onclick = async () => {
            let data = {
                id: id,
                message: message
            };
            data = JSON.stringify(data);
            let response = await fetch('./chat-delete.php', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: data
            });
            console.log(response);
            if (response.ok) {
                response = await response.json();
                console.log(response);
                location.reload();
            }        
        };
    };
});


// logout

$('#logout').on('click', async function () {
    try {
        let response = await fetch('./logout.php');
        if (response.ok) {
            response = await response.json();
            console.log(response);
            window.location.href = './index.php';
        }
    } catch (error) {
        console.log(error);
    }
});