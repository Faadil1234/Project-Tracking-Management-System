document.addEventListener("DOMContentLoaded", function () {

var nav = document.querySelector(".app-header-left")
nav.addEventListener("click",function(){
var nav2 = document.getElementById("app-sidebar")
  nav2.classList.toggle("show2")

});
});


document.addEventListener("DOMContentLoaded", function () {
    // Get modal and button elements
    const modal = document.getElementById("projectModal");
    const createProjectBtn = document.getElementById("createProjectBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const createProjectForm = document.getElementById("createProjectForm");
    const projectsContainer = document.querySelector(".project-boxes");
  
    // Open the modal when the "Add Project" button is clicked
    createProjectBtn.addEventListener("click", function () {
      modal.style.display = "block"; // Show the modal
    });
  
    // Close the modal when the close button is clicked
    closeModalBtn.addEventListener("click", function () {
      modal.style.display = "none"; // Hide the modal
    });
  
    // Close the modal if the user clicks outside the modal content
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none"; // Hide the modal
      }
    });
  
    // Handle form submission for creating a project
    createProjectForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission
  
      // Get form values
      const projectName = document.getElementById("projectName").value;
      const projectDate = document.getElementById("projectDate").value;
      const projectProgress = document.getElementById("projectProgress").value;
      const projectDaysLeft = document.getElementById("projectDaysLeft").value;
  
      // Validate inputs
      if (!projectName || !projectDate || !projectProgress || !projectDaysLeft) {
        alert("Please fill in all fields before creating a project.");
        return;
      }
  
      // Create a new project element with the form data
      const newProject = document.createElement("div");
      newProject.classList.add("project-box");
      newProject.innerHTML = `
        <div class="project-header">
          <h3>${projectName}</h3>
          <p>Deadline: ${projectDate}</p>
        </div>
        <div class="project-details">
          <p>Progress: ${projectProgress}%</p>
          <p>Days Left: ${projectDaysLeft}</p>
        </div>
      `;
  
      // Append the new project to the container
      projectsContainer.appendChild(newProject);
  
      // Close the modal after project creation
      modal.style.display = "none";
  
      // Reset the form fields
      createProjectForm.reset();
    });
  });