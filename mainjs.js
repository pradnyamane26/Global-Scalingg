$(document).ready(function() {
    $('.nav-bar').before('<div class="mobile-trigger"><i></i></div>');
    $('.mobile-trigger').click(function() {
    $('.mobile-trigger i').toggleClass('change');
    $('.nav-bar').toggle('slow');
        return false;
});
});
// $(document).ready(function() {
//     $('.nav-bar').after('<div class="mobile-trigger-one"><i></i></div>');
//     $('.mobile-trigger-one').click(function() {
//     $('body').toggleClass('mobile-close');
//         return false;
//     });


