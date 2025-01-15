
$(document).ready(function () {
    // Add validation to the form
    $("#feedbackForm").submit(function (event) {
        event.preventDefault();
        var form = $(this);
        if (form[0].checkValidity() === false) {
            event.stopPropagation();
        } else {
            // Process the feedback (in this example, we just log it to the console)
            var feedbackData = {
                name: $("#name").val(),
                email: $("#email").val(),
                feedback: $("#feedback").val()
            };
            console.log(feedbackData);

            // Show the thank you modal
            $('#thankYouModal').modal('show');

            // Clear the form
            form[0].reset();
            form.removeClass('was-validated');
        }
        form.addClass('was-validated');
    });
});
