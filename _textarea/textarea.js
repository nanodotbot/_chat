$('textarea').on('input',
    function () {
        $(this).css('height', '');
        $(this).css('height', $(this).prop('scrollHeight') + 1 + 'px');
    }
)
