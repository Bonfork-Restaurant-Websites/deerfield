// Format phone number input
var cleave = new Cleave('#phoneInput', {
    numericOnly: true,
    blocks: [0, 3, 3, 4],
    delimiters: ['(', ') ', '-']
});
if ($('#contact-form').length) {
    $('#contact-form').each(function(){
        $(this).validate({
            errorClass: 'error wobble-error',
            submitHandler: function(form){
                $.ajax({
                    type: "POST",
                    url:"./includes/mail-3.php",
                    data: $(form).serialize(),
                    success: function() {
                        document.querySelector('.alert-contact').style.display = 'block';
                        console.log("Success");
                    },

                    error: function(){
                        document.querySelector('.alert-contact-error').style.display = 'block';
                        console.log("Fail");
                    }
                });
            }
        });
    });
}
