function getValue() {
    var username = document.getElementById('name').value.trim();
    var userfathername = document.getElementById('father-name').value.trim();
    var email = document.getElementById('email').value.trim();
    var number = document.getElementById('number').value.trim();
    var dob = document.getElementById('DOB').value.trim();
    var address = document.getElementById('Address').value.trim();
    var qualification = document.getElementById('LstQualf').value;
    var Hobbies = document.getElementsByName('hobbies');
    var gendervalue = document.getElementsByName('Gender');
    var tskills = document.getElementById('t_skills').value.trim();
    var work = document.getElementById('work').value.trim();

    var hobbiesarr = [];
    var gender = '';

    // Collect checked hobbies
    for (var i = 0; i < Hobbies.length; i++) {
        if (Hobbies[i].checked) {
            hobbiesarr.push(Hobbies[i].value);
        }
    }

    // Collect selected gender
    for (var i = 0; i < gendervalue.length; i++) {
        if (gendervalue[i].checked) {
            gender = gendervalue[i].value;
        }
    }

    // Form validation
    if (username === '') return alert('Enter your name');
    if (userfathername === '') return alert('Enter your father\'s name');
    if (email === '') return alert('Enter your email');
    if (number === '' || number.length < 11) return alert('Enter a valid phone number (11+ digits)');
    if (dob === '') return alert('Enter your date of birth');
    if (gender === '') return alert('Select your gender');
    if (address === '') return alert('Enter your address');
    if (qualification === 'Last-Qualification') return alert('Select your qualification');
    if (hobbiesarr.length === 0) return alert('Select at least one hobby');
    if (tskills === '') return alert('Enter your technical skills');
    if (work === '') return alert('Enter your work experience');

    // Display results in `maindiv-2`
    document.getElementById('maindiv-1').classList.add('d-none');
    document.getElementById('maindiv-2').classList.remove('d-none');
    document.getElementById('maindiv-2').innerHTML = `
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6">
                <h4>Name:</h4>
                <p>${username}</p>
            </div>
        </div>
        
        <div class="row mt-5">
            <div class="col-12 col-md-6">
                <h4>Father's Name:</h4>
                <p>${userfathername}</p>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12 col-md-6">
                <h4>Email:</h4>
                <p>${email}</p>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12 col-md-6">
                <h4>Phone Number:</h4>
                <p>${number}</p>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12 col-md-6">
                <h4>Date of Birth:</h4>
                <p>${dob}</p>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12 col-md-6">
                <h4>Gender:</h4>
                <p>${gender}</p>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12 col-md-6">
                <h4>Address:</h4>
                <p>${address}</p>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12 col-md-6">
                <h4>Qualification:</h4>
                <p>${qualification}</p>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12 col-md-6">
                <h4>Hobbies:</h4>
                <p>${hobbiesarr.join(', ')}</p>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12 col-md-6">
                <h4>Technical Skills:</h4>
                <p>${tskills}</p>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12 col-md-6">
                <h4>Work Experience:</h4>
                <p>${work}</p>
            </div>
        </div>
    </div>`;
}
