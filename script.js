const patients = [
  {
    id: "zeke-profile-click",
    name: "Zeke Pierson",
    color: "#20bdc8",
    lastReviewed: "10-11-2024 | 01:24 PM",
    accrued: 26,
    messages: ["", "none", "none", ""],
  },
  {
    id: "sloan-profile-click",
    name: "Sloan Patrick",
    color: "#ff8a19",
    lastReviewed: "10-16-2024 | 12:48 PM",
    accrued: 12,
    messages: ["none", "", "", "1"],
  },
  {
    id: "alex-profile-click",
    name: "Alex J Brown",
    color: "#ff626c",
    lastReviewed: "Inactive for 5 Days",
    accrued: 0,
    messages: ["", "none", "none", ""],
  },
  {
    id: "",
    name: "Robert Vasquez",
    color: "#fff",
    lastReviewed: "Not Yet Reviewed",
    accrued: 0,
    messages: ["", "none", "none", ""],
  },
  {
    id: "",
    name: "Amy R Smith",
    color: "#fff",
    lastReviewed: "Not Yet Reviewed",
    accrued: 0,
    messages: ["none", "", "", "3"],
  },
  {
    id: "",
    name: "Kallen Farmer",
    color: "#ff8a19",
    lastReviewed: "10-22-2024 | 11:24 AM",
    accrued: 2,
    messages: ["", "none", "none", ""],
  },
  {
    id: "",
    name: "Tenovi Johnson",
    color: "#fff",
    lastReviewed: "10-22-2024 | 10:24 PM",
    accrued: 4,
    messages: ["none", "", "", "2"],
  },
];

// const patients_detail = [
//   {
//     id: "zeke-profile",
//     img: "assets/images/patient_advertisement.png",
//     temperature: "99.1",
//     pain: "8",
//     steps: "416",
//     stepsPercent: "10",
//     weight: "126.8",
//     proms: "32",
//     score: "65",
//     entries: "23",
//     survey: "0"
//   },
// ];

// const patientProfile = document.getElementById("patients-content");

// patients_detail.forEach(({ id, img, temperature, pain, steps, stepsPercent, weight, proms, score, entries, survey }) => {
//   const profile = document.createElement("div");
//   profile.id = id;
//   profile.innerHTML = `

//   `;
//   patientProfile.appendChild(profile);
// });

const tableBody = document.getElementById("user-table-body");

patients.forEach(({ id, name, color, lastReviewed, accrued, messages }) => {
  const row = document.createElement("tr");
  row.id = id;
  row.innerHTML = `
    <td>
      <i class='bi bi-circle-fill' style='color: ${color}; font-size: 6px; margin-right: 5px;'></i>
      ${name}
    </td>
    <td style='color: #a5a7a8;'>${lastReviewed}</td>
    <td>${accrued}</td>
    <td>
      <i class='bi bi-envelope-paper' style='color: #a5a7a8; display: ${messages[0]}'></i>
      <i class='bi bi-envelope-paper-heart' style='display: ${messages[1]}'></i>
      <i class='bi bi-${messages[3]}-circle-fill' style='color: #5ac1d8; margin-left: 5px; display: ${messages[2]}'></i>
      <i class='bi bi-chevron-right' style='color: #a5a7a8'></i>
    </td>
  `;
  tableBody.appendChild(row);
});


document.addEventListener("DOMContentLoaded", function () {
  console.log("Dashboard Loaded");
  $("#zeke-profile").hide();
  $("#sloan-profile").hide();
  $("#alex-profile").hide();
});

$(document).ready(function () {
  $("#zeke-profile-click").click(function () {
    $("#initial-content").hide();
    $("#zeke-profile").show();
    $("#sloan-profile").hide();
    $("#alex-profile").hide();
  });
  $("#sloan-profile-click").click(function () {
    $("#initial-content").hide();
    $("#zeke-profile").hide();
    $("#sloan-profile").show();
    $("#alex-profile").hide();
  });
  $("#alex-profile-click").click(function () {
    $("#initial-content").hide();
    $("#zeke-profile").hide();
    $("#sloan-profile").hide();
    $("#alex-profile").show();
  });
});

