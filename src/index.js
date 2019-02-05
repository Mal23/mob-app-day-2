const mobForm = document.getElementById('mob-app');
const applicantName = document.getElementById('name');
const positions = document.getElementById('position');

mobForm.addEventListener('submit', function(event){
    event.preventDefault();

    const chosenWeapon = [];

    for(let index = 0; index < mobForm.weapon.length; index++) {
        const weaponName = mobForm.weapon[index];
        if(weaponName.checked) {
            chosenWeapon[index] = weaponName.value;
        }
    }
});