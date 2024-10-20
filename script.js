document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form'); // Correctly target the form

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Validate form fields
        if (!name || !email || !subject || !message) {
            alert("Please fill out all fields.");
            return;
        }

        // Send email using EmailJS
        emailjs.send('service_ekzwe9n', 'template_f94x8hv', {
            from_name: name,
            to_name: 'Moise',
            subject: subject,
            message: message,
            reply_to: email
        })
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert("Message sent successfully!");
                form.reset(); // Clear the form after submission
            })
            .catch(function (error) {
                console.error('Failed to send email:', error);
                alert("There was an issue sending your message. Please try again.");
            });
    });
});
