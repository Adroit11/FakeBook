$(document).ready(function() {

        $('form-signin').validate({
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                password: {
                    minlength: 8,
                    required: true
                },
                confirmation: {
                    minlength: 8,
                    required: true,
                    equalTo: "#password"
                }
            },
            success: function(element) {
                element
                .text('OK!').addClass('valid')
            }
        });

});
