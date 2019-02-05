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

    window.location = 'thanks.html';

    const serialize = JSON.stringify(applicant);
    window.localStorage.setItem('applicant', serialize);
    
});