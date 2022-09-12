function expand() {
  document.getElementById('resume').innerHTML = `
    <button class="expand-collapse"><img src="Images/collapse.png" onclick="collapse()"/></button>
    <img class="resume" src="Files/resume.png"/>
  `;
}

function collapse() {
  document.getElementById('resume').innerHTML = `
    <button class="expand-collapse"><img src="Images/expand.png" onclick="expand()"/></button>
  `;
}
