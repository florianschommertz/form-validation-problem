
function validEmail(email) {
    // Email must be a valid email address.
    // regex check for email
    // Dislike the overuse of »id« in HTML  - will be parsed faster but besides that only easier label code with for
    // from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
    // var re = /^\S+@\S+$/i;
   return re.test(email.toLowerCase())

}

function validPassword(password) {
    // Password must be longer than 8 characters.
    // weird line with "username"
    // <input class='error' type='password' id='password' name='username'>
    return password.length >=8 ? true : false
}

function validColour(colour) {
    // Colour must be selected.
    return (colour!=='') ? true : false
}

// At least two Animals must be chosen.
function validAnimals() {
    var els = document.querySelectorAll('[name=animal]');
    var count = 0;
    for (var i = 0; i < els.length; i++){
        if (els[i].checked) {
            count++;
            if (els[i].value==='tiger') {
            // Tiger in this function is better
                if (document.getElementById('tiger_type').value.length === 0) {
                    return false
                }
            }
        }
    }
    // If Tiger is one of the chosen Animals then Type of tiger is required to be a non-empty string.

    return count >= 2 ? true : false
}

function onSubmit(e) {
    e.preventDefault();

    // if check fails
    // set surrounding p to class "error"
    // personally i'd like a class "validate" per field to loop over array of "has to be valid"
    // Approach
    // loop through all Elements with a name Attribute and call
    // validate+namefieldvalue
    // Loop throug name field and do switch in case of value
    // get the p of current loop to e able to atach "error" to it
    //
    // Some from
    //  »you might not need jquery«

    var elements = document.querySelectorAll('[name]');

    Array.prototype.forEach.call(elements, function (el) {
        // console.log(el)
        // console.log(el.getAttribute('name') + el.value);

        // Switch from snippetmanager "Dash"
        switch (el.getAttribute('name')) {
            case 'email':
                if (!validEmail(el.value)) {
                    el.parentNode.setAttribute('class', 'error');
                } else {
                    el.parentNode.setAttribute('class', '');
                }
                break;
            case 'username':
                if (!validPassword(el.value)) {
                    el.parentNode.setAttribute('class', 'error');
                } else {
                    el.parentNode.setAttribute('class', '');
                }
                break;
            case 'colour':
                if (!validColour(el.value)) {
                    el.parentNode.setAttribute('class', 'error');
                } else {
                    el.parentNode.setAttribute('class', '');
                }
                break;
            default:

        }

    })
    if (!validAnimals()) {
        document.querySelectorAll('[name=animal]')[0].parentNode.setAttribute('class', 'error');
    } else {
        document.querySelectorAll('[name=animal]')[0].parentNode.setAttribute('class', '');

     }

}
document.getElementsByTagName('form')[0].onsubmit = onSubmit;
// If the form is submitted and an error occurs, the error element's parent should have a CSS error class added to it.
