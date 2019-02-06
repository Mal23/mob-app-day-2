const mobForm = document.getElementById('mob-app');
const applicantName = document.getElementById('name');
const positions = document.getElementById('position');

mobForm.addEventListener('submit', function(event){
    event.preventDefault();

    const chosenWeapons = [];

    for(let index = 0; index < mobForm.weapon.length; index++) {
        const weaponName = mobForm.weapon[index];
        if(weaponName.checked) {
            chosenWeapons[index] = weaponName.value;
        }
    }

    const applicant = {
        name: applicantName.value,
        position: positions.value,
        chosenWeapons: chosenWeapons
    };

    let applicants = [];
    const jsonString = window.localStorage.getItem('applicants');
    if(jsonString) {
        applicants = JSON.parse(jsonString);
    }

    applicants.push(applicant);
    window.location = 'thanks.html';

    const serialize = JSON.stringify(applicants);
    window.localStorage.setItem('applicants', serialize);
    
});