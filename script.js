document.addEventListener('DOMContentLoaded', function() {
    var datePicker = new Pikaday({
        field: document.getElementById('date'),
        format: 'YYYY-MM-DD'
    });

    document.getElementById('bookingForm').addEventListener('submit', function(event) {
        var form = event.target;
        var name = form.name.value.trim();
        var email = form.email.value.trim();
        var people = form.people.value.trim();
        var time = form.time.value.trim();
        var date = form.date.value.trim();
        var number = form.number.value.trim();

        if (!name || !email || !people || !time || !date || !number) {
            alert('Please fill in all the required fields.');
            event.preventDefault();
        }
    });
});


