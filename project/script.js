let Check = true;
let variable1 = "";
let variable2 = 0;










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
        function insertInputField() {
          const dropdown = document.getElementById('projectProgress');
          const inputContainer = document.getElementById('inputContainer');
          const selectedValue = dropdown.value;
        
          let input2 = document.createElement('input');
          let input3 = document.createElement('label');

         
          let UpcomingDate = "";
          // Clear any previously inserted input field
          inputContainer.innerHTML = '';
        
          // Check which option is selected and insert the input accordingly
          if (selectedValue === 'Upcoming') {
            // const input1 = document.createElement('input');
            input3.textContent = 'Enter the date this project will start :'
            input2.type = 'Date';
            input2.placeholder = 'Enter text for Option 1';
            input2.id = "dynamic-input";
            inputContainer.appendChild(input3);
            inputContainer.appendChild(input2);
          } else if (selectedValue === 'In Progress') {
            input2.type = 'number';
            input2.placeholder = `Enter the progress in %`;
            input2.id = "dynamic-input";
            inputContainer.appendChild(input2);
          }         
        } 
        document.querySelector("select").addEventListener("change", insertInputField);  
        function getInputValue() {
          const inputField = document.getElementById("dynamic-input");
          if (inputField) {
            const inputValue = inputField.value;
           } else {
            alert("no value")
          }
         
        }
      
        // document.querySelector("createProjectForm").addEventListener("submit", getInputValue);

   

   

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
       
        var count = 0;


        // ************Handle form submission for creating a project******************************

        createProjectForm.addEventListener("submit", function (event) {
          event.preventDefault(); // Prevent default form submission
         
          // Get form values
          const projectName = document.getElementById("projectName").value;
          const projectStartDate = document.getElementById("projectDate").value; // Start date
          const projectDeadline = document.getElementById("projectDeadline").value; // Deadline date
          const projectProgress = document.getElementById("projectProgress").value;
          const projectDaysLeft = document.getElementById("projectDaysLeft").value;
      
          console.log(projectProgress);
          let tag = "";
          let tag2 = "";
          let count2 = 0;


          const status2 = document.getElementById("upcoming")
          const status = document.querySelector(".status-number")

          if(projectProgress == "Upcoming"){
            count2 += 1;
            
            status2.innerHTML = `${count2}`
            tag = document.getElementById("dynamic-input").value
            tag2 = `
                  <p class="box-progress-header">Upcoming Project On :</p>
                  <div class="box-progress-bar">
                      
                  </div>
                  <p class="box-progress-percentage">${tag}</p>
              `
          }else if (projectProgress == "In Progress"){
            count += 1;
            status.innerHTML = `${count}`
            tag = `${document.getElementById("dynamic-input").value}%`
            tag2 = `
                  <p class="box-progress-header">Progress</p>
                  <div class="box-progress-bar">
                      <span class="box-progress" style="width: 60%; background-color: #ff942e"></span>
                  </div>
                  <p class="box-progress-percentage">${tag}</p>
              `
          }
          const totalproject = count + count2;
            const status3 = document.getElementById("total-project")
            status3.innerHTML = `${totalproject}`;
          // Validate inputs
          if (!projectName || !projectStartDate || !projectDeadline || !projectProgress || !projectDaysLeft) {
            alert("Please fill in all fields before creating a project.");
            return;
          }
          getInputValue();
          // **********Create a new project element with the form data***************************

          const newProject = document.createElement("div");
          newProject.classList.add("project-box-wrapper");
          newProject.innerHTML =  `
          <div class="project-box" >
              <div class="project-box-header">
                  <span class="project-Date">${projectStartDate}</span>
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
                              <div class="more-option">
                                <span class="close-btn" id="closeModalBtn">&times;</span>
                                  <ul style="list-style: none;">
                                      <li class="remove-btn">remove</li>
                                      <li class="edit-btn">edit</li>
                                  </ul>
                              </div>
                  </div>
              </div>
              <div class="project-box-content-header">
                  <p class="box-content-header">${projectName}</p>
                  <p class="box-content-subheader">Prototyping</p>
              </div>
              <div class="box-progress-wrapper">
                  ${tag2}
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
           // Randomly choose a color (could be any logic here)
      const colors = ['rgba(209, 209, 209, 0.4)', ' #e9ebf0','#fee4cb' ,'#f3f6fd', '#c8f7dc', '#e9e7fd'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      // Set the background color of the new div
      newProject.style.backgroundColor = randomColor;
      newProject.style.margin = "1%";
      newProject.style.borderRadius = "15px" ;

          const projectdiv = document.querySelector(".project-boxes")
          projectdiv.insertBefore(newProject,projectsContainer.firstChild)
          
          // Close the modal after project creation
          modal.style.display = "none";
      
          // Reset the form fields
          createProjectForm.reset();


          const moreOption = document.querySelector(".project-btn-more")
          const moreOptionMenu = document.querySelector(".more-option")

          moreOption.addEventListener("click",function () {
            moreOptionMenu.style.display = "block";         
        });
        window.addEventListener("click", function (event) {
          if (event.target === moreOptionMenu) {
            moreOptionMenu.style.display = "none"; // Hide the modal
          }
        });
        const closeOptionBtn = document.querySelector(".more-option span");

        closeOptionBtn.addEventListener("click", function () {
          moreOptionMenu.style.display = "none"; // Hide the modal
          });




        // to remove the project using the more option button
        const moreOptionRemove = document.querySelector(".remove-btn")
        
        const projectRemoved = document.querySelector(".project-box-wrapper")
        const checkprojectremoved = document.querySelector(".project-box-wrapper .box-progress-percentage")
        
        const projectSection = document.querySelector(".projects-section")

          moreOptionRemove.addEventListener("click",function () {

            
          
            if(checkprojectremoved.textContent == "Progress"){
              if(count > 0){
                count -= 1;
                status.innerHTML = `${count}`
              }
            }else{
              if(count2 > 0){
                count2 -= 1;
                 status2.innerHTML = `${count2}`
              }
            }
       
          
         
          projectRemoved.style.display = "none";
          projectdiv.style.backgroundColor = projectSection.style.backgroundColor;
          })

          
       
        // ***************************Edit page for project Editing **********************************************
        const moreOptionMenuEdit = document.querySelector(".edit-btn")
        const modalEdit = document.getElementById("projectModal-Edit");

          moreOptionMenuEdit.addEventListener("click",function () {
          modalEdit.style.display = "block"; // Show the modal
          });
              // Close the modal when the close button is clicked
        
          // Close the modal if the user clicks outside the modal content
          window.addEventListener("click", function (event) {
            if (event.target === modalEdit) {
              modalEdit.style.display = "none"; // Hide the modal
            }
          });
          
          const closeModalEditBtn = document.querySelector(".modalEdit .close-btn");
    
          closeModalEditBtn.addEventListener("click", function () {
          modalEdit.style.display = "none"; // Hide the modal
        });

          document.getElementById("EditprojectName").value = document.getElementById("projectName").value;
          document.getElementById("EditprojectDate").value = document.getElementById("projectDate").value; // Start date
          document.getElementById("EditprojectDeadline").value = document.getElementById("projectDeadline").value; // Deadline date
          document.getElementById("EditprojectProgress").value = document.getElementById("projectProgress").value;
          document.getElementById("EditprojectDaysLeft").value = document.getElementById("projectDaysLeft").value;
        
        const createProjectEditForm = document.getElementById("createProjectEditForm");
          createProjectEditForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission
            
            // Get form values
            const Edited_projectName = document .getElementById("EditprojectName").value;
            const Edited_projectDate = document.getElementById("EditprojectDate").value; // Start date
            const Edited_projectDeadline = document.getElementById("EditprojectDeadline").value; // Deadline date
            const Edited_projectProgress = document.getElementById("EditprojectProgress").value;
            const Edited_projectDaysLeft = document.getElementById("EditprojectDaysLeft").value;
          
            document.querySelector(".box-content-header").textContent = Edited_projectName;
            document.querySelector(".project-box-header .project-Date").textContent = Edited_projectDate;
            document.querySelector(".box-progress-percentage").textContent = Edited_projectProgress;
            document.querySelector(".days-left").textContent = `Days Left : ${Edited_projectDaysLeft}`;

          // Close the modalEdit after project Edition
          modalEdit.style.display = "none";

            // Reset the form fields
            createProjectEditForm.reset();
           })
          
           //*********************************************************************************** 
        });
        
        
   
  });

