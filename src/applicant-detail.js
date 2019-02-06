const name = document.getElementById('name');
const position = document.getElementById('position');
const weapons = document.getElementById('weapons');

const json = window.localStorage.getItem('applicants');

let applicant = [];

if(json) {
    const applicants = JSON.parse(json);
    applicant = applicants[applicants.length - 1];
}
else {
    window.location = '/';
}
name.textContent = applicant.name;
position.textContent = applicant.position;
weapons.textContent = applicant.chosenWeapons.join(' ');

