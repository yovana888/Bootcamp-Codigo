const readInput  = () => {
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.style.cssText= `
        color:blue;
        border:1px solid purple;
      `;
    })
}


document.addEventListener('DOMContentLoaded', readInput())