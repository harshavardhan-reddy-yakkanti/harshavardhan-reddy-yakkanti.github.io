// Load everything after page loads
document.addEventListener("DOMContentLoaded", function () {
loadComponent("src/components/header.html", "#header");
loadComponent("src/components/footer.html", "#footer");
loadProjects();
});

// Load header/footer
function loadComponent(path, selector) {
fetch(path)
.then(response => {
if (!response.ok) {
throw new Error("Failed to load " + path);
}
return response.text();
})
.then(data => {
const element = document.querySelector(selector);
if (element) {
element.innerHTML = data;
}
})
.catch(error => console.error(error));
}

// ✅ LOAD PROJECTS (FIXED)
function loadProjects() {
fetch("src/data/projects.json")
.then(response => response.json())
.then(projects => {
const container = document.getElementById("projects");
if (!container) return;

        projects.forEach(project => {
            const card = document.createElement("div");
            card.className = "project-card";

            card.innerHTML = `
                <h3>${project.title}</h3>

                <p><strong>Duration:</strong> ${project.duration || ""}</p>
                <p><strong>Role:</strong> ${project.role || ""}</p>

                <div class="skills-tags">
                    ${(project.skills || []).map(skill => `<span class="tag">${skill}</span>`).join("")}
                </div>

                <p class="section-title">Key Contributions:</p>
                <ul>
                    ${(project.contributions || []).map(item => `<li>${item}</li>`).join("")}
                </ul>
            `;

            container.appendChild(card);
        });
    })
    .catch(error => console.error("Error loading projects:", error));


}

/* ========================= */
/* 🔥 MODAL (WORKING) */
/* ========================= */

document.addEventListener("click", function (e) {


const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

// OPEN MODAL
if (e.target && e.target.id === "profileImage") {
    modal.style.display = "flex";
    modalImg.src = e.target.src;
}

// CLOSE when clicking X
if (e.target && e.target.classList.contains("close")) {
    modal.style.display = "none";
}

// CLOSE when clicking outside image
if (e.target === modal) {
    modal.style.display = "none";
}


});

// CLOSE using ESC key
document.addEventListener("keydown", function (e) {
if (e.key === "Escape") {
const modal = document.getElementById("imageModal");
if (modal) modal.style.display = "none";
}
});




document.addEventListener("click", function (e) {

const header = e.target.closest(".section-header");

if (!header) return;

const section = header.parentElement;

if (section && section.classList.contains("collapsible")) {
    section.classList.toggle("collapsed");
}

});
