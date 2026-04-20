
// AUTH
const user = JSON.parse(localStorage.getItem("user"));

if (!user || user.role !== "Staff") {
    alert("Access denied");
    window.location.href = "./index.html";
}

// TAB
function openTab(id) {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// CHART OPEN
let currentPatient = "";

function openChart(name) {
    currentPatient = name;

    document.getElementById("patientList").classList.add("hidden");
    document.getElementById("patientChart").classList.remove("hidden");
    document.getElementById("patientName").textContent = name + " - Chart";

    loadChart(name);
}

function closeChart() {
    document.getElementById("patientList").classList.remove("hidden");
    document.getElementById("patientChart").classList.add("hidden");
}

// SAVE PER PATIENT
function saveChart() {
    const data = {
        sbar: document.getElementById("sbar").value,
        bp: document.getElementById("bp").value,
        hr: document.getElementById("hr").value,
        rr: document.getElementById("rr").value,
        temp: document.getElementById("temp").value,
        doctor: document.getElementById("doctorNotes").value,
        progress: document.getElementById("progressNotes").value
    };

    localStorage.setItem("patient_" + currentPatient, JSON.stringify(data));

    alert("Saved for " + currentPatient);
}

// LOAD PATIENT
function loadChart(name) {
    const data = JSON.parse(localStorage.getItem("patient_" + name));

    if (!data) return;

    document.getElementById("sbar").value = data.sbar || "";
    document.getElementById("bp").value = data.bp || "";
    document.getElementById("hr").value = data.hr || "";
    document.getElementById("rr").value = data.rr || "";
    document.getElementById("temp").value = data.temp || "";
    document.getElementById("doctorNotes").value = data.doctor || "";
    document.getElementById("progressNotes").value = data.progress || "";
}

// MENU
function toggleMenu() {
    document.getElementById("dropdownMenu").classList.toggle("hidden");
}

function logout() {
    localStorage.clear();
    window.location.href = "./index.html";
}

function goAccount(){ alert("Account page soon"); }
function goHelp(){ alert("Help: contact admin"); }
function goAbout(){ alert("CentiCare HIS v2"); }