

document.addEventListener("DOMContentLoaded", function () {
    const mainForm = document.getElementById("mainForm");
    const form2 = document.getElementById('form2');
    const nextButton = document.getElementById('nextButton');
    const submitButton = document.getElementById('submitButton');
    const formDetails = document.getElementById('formDetails');
    const createshift = document.getElementById("createshift");
    const popupform = document.getElementById("popupform");
    const toggleSelect = document.getElementById("toggleSelect");
    const statusSelect = document.getElementById("statusSelect");
    const exitformbtn = document.getElementById("exitform");


    toggleSelect.addEventListener('change', function (e) {

        const selectedOption = toggleSelect.value;

        if (selectedOption === "Create New") {
            // e.preventDefault();
            popupform.classList.remove('hidden');
            document.querySelector(".btn1").style.backgroundColor = "#ffffff";


            //pull out the status active or inactive
            // const statusData = statusSelect.options[statusSelect.selectedIndex].text;
            const statusData = statusSelect.value

            exitformbtn.addEventListener('click', function (e) {
                popupform.classList.add('hidden');
                window.location.reload();


            });

            nextButton.addEventListener('click', function (e) {
                e.preventDefault();//is used to stop the default behavior associated with an event, giving you more control over what happens when an event occurs.
                form1.classList.add('hidden');
                nextButton.classList.add('hidden');
                form2.classList.remove('hidden');
                document.querySelector(".btn2").style.backgroundColor = "#ffffff";
                document.querySelector(".btn1").style.backgroundColor = "#c5c4c4";

                submitButton.classList.remove('hidden');
            });


            submitButton.addEventListener('click', function (e) {
                e.preventDefault();
                const shift_name = document.getElementById('shift_name').value;
                const start_time = document.getElementById('start_time').value;
                const end_time = document.getElementById('end_time').value;
                const entry_period = document.getElementById('entry_period').value;
                const exit_period = document.getElementById('exit_period').value;


                // form2.classList.add('hidden');
                // submitButton.classList.add('hidden');
                popupform.classList.add('hidden');
                // Display form details

                formDetails.innerHTML = `<div style="padding-right: 6px; padding-left: 6px;">

<div class="header-body-details-second" 
style="height: 30px;justify-content:space-between; display: flex; width:auto;height: auto; margin-top: 15px; border: 1px solid rgb(122, 133, 232);">
<p class="pdata" style="padding-left: 30px;align-items: center;">${shift_name}</p>
<p class="pdata">${start_time} AM</p>
<p class="pdata">${end_time} PM</p>
<p class="pdata">${entry_period} mins</p>
<p class="pdata">${exit_period} mins</p>
<p class="pdata">${statusData}</p>
<p class="pdata">5</p>
<!-- Threedot button -->
<button type="button" id="threedotbtn" href="mine.html" class="threedot" style="padding-right: 20px; margin-top: 6px; border: none;"><strong>⋮</strong></button>

</div>
</div>

<!-- row per page and button like previous,next -->
<div
style="margin-top: 20%; width: 100%; height: 40px;background-color: rgb(238, 238, 238); display: flex;align-items: center;">

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

</div>
                    `;



                // Threedot button 
                const threedotbtn = document.getElementById("threedotbtn");
                const popupupdate = document.getElementById("popupupdate");

                threedotbtn.addEventListener('click', function (e) {
                    // e.preventDefault();
                    // popupupdate.classList.remove('hidden');
                    // // window.alert("working")
                    if (popupupdate.style.display === "none") {
                        popupupdate.style.display = "block";
                    } else {
                        popupupdate.style.display = "none";
                    }
                    console.log("working");
                })
            });

            console.log("working...huihui");
        }
        else {
            // formDetails.classList.add('hidden');
            // Reload the current page
            window.alert("Please select Create New ");
            window.location.reload();


        }
    });

})
