document.addEventListener("DOMContentLoaded", function () {
  var modeSwitch = document.querySelector(".mode-switch");
  modeSwitch.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
    modeSwitch.classList.toggle("active");
  });
  var listView = document.querySelector(".list-view");
  var gridView = document.querySelector(".grid-view");
  var projectsList = document.querySelector(".project-boxes");
  listView.addEventListener("click", function () {
    gridView.classList.remove("active");
    listView.classList.add("active");
    projectsList.classList.remove("jsGridView");
    projectsList.classList.add("jsListView");
  });
  gridView.addEventListener("click", function () {
    gridView.classList.add("active");
    listView.classList.remove("active");
    projectsList.classList.remove("jsListView");
    projectsList.classList.add("jsGridView");
  });
  document
    .querySelector(".messages-btn")
    .addEventListener("click", function () {
      document.querySelector(".messages-section").classList.add("show");
    });
  document
    .querySelector(".messages-close")
    .addEventListener("click", function () {
      document.querySelector(".messages-section").classList.remove("show");
    });

    var nav = document.querySelector(".app-header-left svg")
    nav.addEventListener("click",function(){
    var nav2 = document.querySelector(".app-sidebar")
      nav2.classList.toggle("show2")


    });




    
        // Get modal and button elements
        const modal = document.getElementById("projectModal");
        const createProjectBtn = document.getElementById("createProjectBtn");
        const closeModalBtn = document.getElementById("closeModalBtn");
        const createProjectForm = document.getElementById("createProjectForm");
        const projectsContainer = document.querySelector(".project-boxes");
        const creareproject = document.getElementById("client" )
      
        // Open the modal when the "Add New Project" button is clicked
        createProjectBtn.addEventListener("click", function () {
          modal.style.display = "block"; // Show the modal
          creareproject.classList.toggle("static");
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
          const projectStartDate = document.getElementById("projectDate").value; // Start date
          const projectDeadline = document.getElementById("projectDeadline").value; // Deadline date
          const projectProgress = document.getElementById("projectProgress").value;
          const projectDaysLeft = document.getElementById("projectDaysLeft").value;
      
          // Validate inputs
          if (!projectName || !projectStartDate || !projectDeadline || !projectProgress || !projectDaysLeft) {
            alert("Please fill in all fields before creating a project.");
            return;
          }
      
          // Create a new project element with the form data
          const newProject = document.createElement("div");
          newProject.classList.add("project-box-wrapper");
          newProject.innerHTML =  `
          <div class="project-box" style="background-color: #fee4cb;">
              <div class="project-box-header">
                  <span>${projectStartDate}</span>
                  <div class="more-wrapper">
                      <button class="project-btn-more">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round"
                              class="feather feather-more-vertical">
                              <circle cx="12" cy="12" r="1" />
                              <circle cx="12" cy="5" r="1" />
                              <circle cx="12" cy="19" r="1" />
                          </svg>
                      </button>
                  </div>
              </div>
              <div class="project-box-content-header">
                  <p class="box-content-header">${projectName}</p>
                  <p class="box-content-subheader">Prototyping</p>
              </div>
              <div class="box-progress-wrapper">
                  <p class="box-progress-header">Progress</p>
                  <div class="box-progress-bar">
                      <span class="box-progress" style="width: 60%; background-color: #ff942e"></span>
                  </div>
                  <p class="box-progress-percentage">${projectProgress}%</p>
              </div>
              <div class="project-box-footer">
                  <div class="participants">
                      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                          alt="participant">
                      <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                          alt="participant">
                      <button class="add-participant" style="color: #ff942e;">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                              stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                              <path d="M12 5v14M5 12h14" />
                          </svg>
                      </button>
                  </div>
                  <div class="days-left" style="color: #ff942e;">
                   Days Left: ${projectDaysLeft}
                  </div>
              </div>
          </div>`
         //   <div class="project-header">
          //     <h3>${projectName}</h3>
          //     <p>Start Date: ${projectStartDate}</p>
          //     <p>Deadline: ${projectDeadline}</p>
          //   </div>
          //   <div class="project-details">
          //     <p>Progress: ${projectProgress}%</p>
          //     <p>Days Left: ${projectDaysLeft}</p>
          //   </div>
          // `;
          // Append the new project to the container
          const projectdiv = document.querySelector(".project-boxes")
          projectdiv.insertBefore(newProject,projectsContainer.firstChild)
      
          // Close the modal after project creation
          modal.style.display = "none";
      
          // Reset the form fields
          createProjectForm.reset();
        });
     
});




// document.addEventListener("DOMContentLoaded", function () {
  // Get modal and button elements
  
// });