const themeModal = $('#theme-modal');
const toggleThemeModal = () => themeModal.addClass('open');

$('#open-modal').on('click', toggleThemeModal);
