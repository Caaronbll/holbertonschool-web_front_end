function welcome(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;
    function displayFullName(fN) {
        alert('Welcome ' + fN + '!');
    }
    displayFullName(fullName);
};
