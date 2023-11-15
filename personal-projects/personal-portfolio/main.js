const greet = document.querySelector('.greet');
const myName = document.querySelector('.name');
const jobTitle = document.querySelector('.jobtitle');
const summary = document.querySelector('.summary');

// Animations effect immediately after loading
window.addEventListener('load', function () {
    setTimeout(function () {
        greet.classList.add('greet-active');
    }, 500)
    setTimeout(function () {
        const readName = myName.innerText;
        const length = readName.length;
        for (let i = 0; i < length; i++) {
            setTimeout(function () {
                myName.classList.add('name-active');
                myName.innerText = readName.slice(0, i + 1); // Appending each letter
            }, 100 * (i + 1)); // Adding a delay for each letter
        }
    }, 1000);
    setTimeout(function () {
        jobTitle.classList.add('jobtitle-active');
    }, 2300)
    setTimeout(function () {
        summary.classList.add('summary-active');
    }, 3000)

    // Skew transition
    const dpBg = document.querySelector('.dp-bg');
    dpBg.classList.add('dp-bg-active');
})

// Navbar changing focus on Scrolling
const navbarSection = document.querySelector('#navbar');

const homeSection = document.querySelector('#home');
const navLinkHome = document.querySelector('.nav-link-home');

const skillsSection = document.querySelector('#skills');
const navLinkSkills = document.querySelector('.nav-link-skills');

const softSkillsSection = document.querySelector('#softskills');
const navLinkSoftSkills = document.querySelector('.nav-link-softskills');

const projectsSection = document.querySelector('#projects');
const navLinkProjects = document.querySelector('.nav-link-projects');

const journeySection = document.querySelector('#journey');
const navLinkJourney = document.querySelector('.nav-link-journey');

const contactSection = document.querySelector('#contact');
const navLinkContact = document.querySelector('.nav-link-contact');

window.addEventListener('scroll', function () {
    // sticky
    if (scrollY > 20) {
        navbarSection.classList.add('sticky')
    } else {
        navbarSection.classList.remove('sticky');
    }

    // Array to store the visible sections
    const visibleSections = [];

    // Function to add sections to the array based on visibility
    function addVisibleSection(section, navLink) {
        const sectionRange = section.getBoundingClientRect();
        // 'getBoundingClientRect()' returns the size of an element and its position relative to the viewport 
        // The returned value is a DOMRect object, which contains properties like top, right, bottom, left, height, width, x and y.
        // It represents the distances from the element's border box to the respective edges of the viewport.
        if (sectionRange.top <= window.innerHeight && sectionRange.bottom >= 0) {
            // Window.innerHeight represents the height of the visible content area within the browser window. 
            // If we resize the browser window or view the page on a device with a different screen size, the value of will change accordingly.
            visibleSections.push({ section, navLink });
        }
    }
    // Adding all sections to the array
    addVisibleSection(homeSection, navLinkHome);
    addVisibleSection(skillsSection, navLinkSkills);
    addVisibleSection(softSkillsSection, navLinkSoftSkills);
    addVisibleSection(projectsSection, navLinkProjects);
    addVisibleSection(journeySection, navLinkJourney);
    addVisibleSection(contactSection, navLinkContact);

    // Sorting the array by the percentage of the section visible
    visibleSections.sort(function (a, b) {
        // window.innerHeight = viewport height
        // a.section.getBoundingClientRect().top = sections height that is out of the viewport -(minus) sections total height (resulting value will be in minus)
        const aVisibility = (window.innerHeight - a.section.getBoundingClientRect().top);
        const bVisibility = (window.innerHeight - b.section.getBoundingClientRect().top);
        return bVisibility - aVisibility;
    });

    // Remove 'nav-bar-active' class from all links
    let allNavLinks = document.querySelectorAll('.nav-link');
    for (let link of allNavLinks) {
        link.classList.remove('nav-bar-active');
    }

    // Add 'nav-bar-active' class to the section with the highest visibility
    if (visibleSections.length > 0) {
        const navLink = visibleSections[0].navLink;
        navLink.classList.add('nav-bar-active');
    }
});

// Projets Filter
const filterContainer = document.querySelector(".projects-filter"),
    filterBtns = filterContainer.children;
totalFilterBtn = filterBtns.length;
projectsItems = document.querySelectorAll(".projects-item"),
    totalprojectsItem = projectsItems.length;
for (let i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener("click", function () {
        const activeButton = filterContainer.querySelector(".active");
        activeButton.classList.remove("active");
        this.classList.add("active");
        const filterValue = this.getAttribute("data-filter")
        const projectFilterValue = projectsItems[k].getAttribute("data-category");
        for (let k = 0; k < totalprojectsItem; k++) {
            if (filterValue === projectFilterValue) {
                projectsItems[k].classList.remove("hide");
                projectsItems[k].classList.add("show");
            }
            else {
                projectsItems[k].classList.remove("show");
                projectsItems[k].classList.add("hide");
            }
            if (filterValue === "all") {
                projectsItems[k].classList.remove("hide");
                projectsItems[k].classList.add("show");
            }
        }
    })
}

// Soft-skills animation
const softSkills = document.querySelector(".soft-skill-section");
const skillsBar = document.querySelectorAll(".progress-line");
window.addEventListener("scroll", function () {
    // Soft-skills animation
    if (!softSkillCheckScroll(softSkills)) {
        skillsBar.forEach(function (skill) {
            skill.style.transition = 'none';
            skill.style.width = '0';
        });
    }
    else {
        skillsBar.forEach(function (skill) {
            skill.style.transition = 'all 2s';
            skill.style.width = skill.dataset.progress;
        })
    }
})
function softSkillCheckScroll(el) {
    let rect = el.getBoundingClientRect();
    if ((window.innerHeight >= rect.top + rect.height / 1.6) && (window.innerHeight <= rect.bottom + rect.height / 1.5)) {
        // The offsetHeight property of an element in JavaScript returns the height of the element, including its vertical padding, border, and optionally its horizontal scrollbar height, margin, and the height of its inline contained children.
        return true;
    }
    else {
        return false;
    }
}

// Timeline animation
const journey = document.querySelector(".journey-section");
const timelineContainer = document.querySelectorAll(".timeline-container");
const leftContainer = document.querySelectorAll(".left-container");
const rightContainer = document.querySelectorAll(".right-container");
window.addEventListener("scroll", function () {
    if (!timelineCheckScroll(journey)) {
        timelineContainer.forEach(function (skill) {
            skill.style.animation = 'none';
        });
    }
    else {
        for (let i = 0; i < timelineContainer.length; i++) {
            timelineContainer[i].style.animationDelay = `${i}s`;
            if (i < leftContainer.length) {
                leftContainer[i].style.animation = 'move-x-left 1s linear forwards';
            }
            if (i < rightContainer.length) {
                rightContainer[i].style.animation = 'move-x-right 1s linear forwards';
            }
        }
    }
})
function timelineCheckScroll(el) {
    let rect = el.getBoundingClientRect();
    if ((window.innerHeight >= rect.top) && (window.innerHeight <= rect.bottom + rect.height / 2)) {
        return true;
    }
    else {
        return false;
    }
}

// Message popup
const submitBtn = document.querySelector('.submit-btn');
const popUp = document.querySelector('.pop-up');
const inputControl = document.querySelectorAll('.input-control');
const message = document.querySelector('.message');
submitBtn.addEventListener('click', function () {
    let isEmpty = false;
    for (let i = 0; i < inputControl.length; i++) {
        if (inputControl[i].value === '') {
            isEmpty = true;
            break;
        }
    }
    if (isEmpty) {
        message.classList.add('fill-details-active');
        message.innerText = 'kindly fill all details!'
        setTimeout(function () {
            message.classList.remove('fill-details-active');
            message.innerText = '';
        }, 3000)
    }
    else {
        message.classList.add('message-sent-active');
        message.innerText = 'Message sent Successfully!'
        setTimeout(function () {
            message.classList.remove('message-sent-active');
            message.innerText = '';
        }, 3000)
}
})

// Responsive
// Navbar close and open
let menubar = document.querySelector('.menu');
function openmenu() {
    menubar.style.right = '0';
}
function closemenu() {
    menubar.style.right = '-175px';
}