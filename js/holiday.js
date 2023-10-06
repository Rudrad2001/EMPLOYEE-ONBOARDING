
const mainForm = document.getElementById("mainForm");
const toggleSelect = document.getElementById("toggleSelect");
const popupform = document.getElementById("popupform");
const exitformbtn = document.getElementById("exitform");
const createButton = document.getElementById("createButton");
const formDetails = document.getElementById("formDetails");
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const otherbtn = document.getElementById("otherbtn");
const newbtn = document.getElementById("newbtn");





document.addEventListener("DOMContentLoaded", function () {
    toggleSelect.addEventListener('change', function () {

        const selectedOption = toggleSelect.value;

        if (selectedOption === "Create New") {
            // window.alert("working");
            console.log("working");
            popupform.classList.remove("hidden");

            exitformbtn.addEventListener('click', function (e) {
                popupform.classList.add('hidden');
                window.location.reload();
            });                         
        }
        else {
            window.alert("Please select create new option");
        }


    })
})


function updateFormDetails() {


    const holiday_name = document.getElementById('holiday_name').value;
    const holiDate = document.getElementById('holiDate').value;
    const holiday_type = document.getElementById('holiday_type').value;


    const selectedDate = new Date(holiDate);
    console.log(selectedDate);

    // Get the day (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = selectedDate.getDay();

    // Now you can use 'dayOfWeek' to get the day as a number
    console.log(dayOfWeek);

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = dayNames[dayOfWeek]; // Get the day name
    console.log(dayName); // Example: If 'dayOfWeek' is '5', this will  'Friday'


    // pull out dept text 
    // const deptsingletypeElements = document.querySelectorAll('.deptsingletype');
    const departmentTextArray = [];

    deptsingletypeElements.forEach(function (element) {
        departmentTextArray.push(element.textContent.trim());
    });

    const departmentText = departmentTextArray.join(', ');



    const desigsingletypeElements = document.querySelectorAll('.desigsingletype');
    const desigTextArray = [];

    desigsingletypeElements.forEach(function (element) {
        desigTextArray.push(element.textContent.trim());
    });

    const desigText = desigTextArray.join(', ');
    formDetails.innerHTML = (` <div style="padding-right: 6px; padding-left: 6px;">

<div class="header-body-details-second" style="border: 1px solid rgb(122, 133, 232);">
<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
style="margin-left: 4px;margin-top: 8px;width: 24px;height: 14px;">
<p class="pdata" style="padding-left: 30px;align-items: center;">${holiday_name}</p>
<p class="pdata">${holiDate}</p>
<p class="pdata">${holiday_type}</p>
<p class="pdata">${departmentText}</p>
<p class="pdata">${desigText}</p>
<p class="pdata">${dayName}</p>


<div style="display: flex; align-items: center; gap: 10px;">
<button type="button" style="background-color: transparent; border: none;">
    <i class="fa-solid fa-pen" style="color: #bc9338; font-size: 20px;"></i>
</button>

<button type="button" style="background-color: transparent; border: none;">
    <i class="fa-solid fa-trash-can" style="color: #485161; font-size: 20px;"></i>
</button>
</div>

</div>
</div>

<!-- row per page and button like previous,next -->
<div
style="margin-top: 20%; width: 100%; height: 40px; background-color: rgb(238, 238, 238); display: flex;align-items: center;">

<div class="firsthalf"
style="height: 20px; display: flex; align-items: center; padding: 0 10px;">
<span style="font-size: 14px">Row Per Page</span>
<select name="" id=""
style="margin-left: 15px; margin-right: 15px; width: 50px; border-radius: 4px;">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
</select>
<span style="font-size: 14px">Showing 1-1 of 1 entries</span>
</div>
<div class="secondhalf" style="margin-left: 100px; display: flex; gap: 2px; height: 20px;">

<button class="firstone"
style="width: 80px;border: white; background-color: white;border-radius: 2px;color:rgb(34, 100, 165); font-size: 14px; text-align: center;align-items: center;">Previous</button>
<button class="secondone"
style="width: 20px;border: white; background-color: white;border-radius: 2px;color:rgb(34, 100, 165); font-size: 14px; text-align: center;align-items: center;">1</button>
<button class="thirdone"
style="width: 45px;border: white; background-color: white;border-radius: 2px;color:rgb(34, 100, 165); font-size: 14px; text-align: center;align-items: center;">Next</button>

</div>

</div>`);

    //                     }`;
}

function removeDepartment(button) {
    const departmentToRemove = button.parentElement;
    departmentToRemove.remove();
    // updateFormDetails();
}

function removeDesig(button) {
    const desigToRemove = button.parentElement;
    desigToRemove.remove();
    // updateFormDetails();
}

createButton.addEventListener('click', function (e) {

    e.preventDefault();
    popupform.classList.add('hidden');
    updateFormDetails()

})

otherbtn.addEventListener('click', function (e) {

    e.preventDefault();
    form1.classList.add('hidden');
    form2.classList.remove('hidden');

    document.querySelector(".bckcolor").style.backgroundColor = "rgb(221, 221, 221)"
    document.querySelector(".shftbtn2").style.backgroundColor = "#ffffff"

})

newbtn.addEventListener('click', function(e) {
    form1.classList.remove('hidden');
    form2.classList.add('hidden');

    document.querySelector(".shftbtn2").style.backgroundColor = "rgb(221, 221, 221)"
    document.querySelector(".bckcolor").style.backgroundColor = "#ffffff"

})