// fetch data

const getData = () => {
    $.get('get.php',
        function (data, status) {
            // console.log(status);
            let response = data;
            response = JSON.parse(response);
            $('#posts').html('');
            response.forEach(element => {
                let date = new Date(element.created_at);
                date = date.setTime(date.getTime() + 2 * 60 * 60 * 1000);
                date = new Date(date);
                const days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
                const day = days[date.getDay()];
                date = date.toLocaleString('de-CH');

                $('#posts').append(
                '<div class="post"><div class="meta"><p>' + element.user + '</p><p>' + day + ', ' + date + '</p></div><p>' + element.message + '</p></div><hr>');
            });
        }
    )
}
getData();

// post data

const message = document.getElementById('message');

const handleChat = () => {
    const messageValue = message.value;
    let data = {
        message: messageValue
    };
    data = JSON.stringify(data);
    $.post('./post.php', data,
        function (data, status) {
            console.log(status);
            data = JSON.parse(data);
            console.log(data);
            getData();
        }
    );
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

// logout

$('#logout').on('click', function () {
    let data = {
        message: 'here i am'
    }
    data = JSON.stringify(data);
    $.get('./logout.php', data,
        function (data, status) {
            console.log(data);
            console.log(status);
            status === 'success' ? window.location.href = './index.php' : null;
        }
    );
});