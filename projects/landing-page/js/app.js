/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section')
const navBarList = document.querySelector('#navbar__list')

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavigationBar(){
    /**
     * @description A function that dynamically creates the Navigation Bar based on the number of sections present in the page
    */

    //Iterate through all the sections
    for(let section of sections){
        const sectionID = section.id
        const sectionName = section.getAttribute('data-nav')
        const newListItem = document.createElement('li')
        const newMenuElement = document.createElement('a')
        newMenuElement.innerText = sectionName
        newMenuElement.setAttribute('data-section-id',sectionID)
        newMenuElement.classList.add('menu__link')
        //Defines an event listener for click event 
        newMenuElement.addEventListener('click', (event) => {
            event.preventDefault()
            section.scrollIntoView({behavior:'smooth'})
        })
        //Appends the new elements to the DOM
        newListItem.appendChild(newMenuElement)
        navBarList.appendChild(newListItem)
    }

    addScrollToSections() 
}


// Add class 'active' to section when near top of viewport
function addScrollToSections(){
    /**
     * @description A function which highlights the section and the navigation menu when user scrolls through the page
    */

    window.addEventListener('scroll', () => {
        //Iterate through all the sections 
        for(let section of sections){
            const sectionBound = section.getBoundingClientRect()
            const sectionID = section.id
            const navMenuElement = document.querySelector(`a[data-section-id="${sectionID}"]`)
            //Checks whether the section rectangle bounds are in the user's visible view port or not
            if(sectionBound.top >= 0 && sectionBound.top < window.innerHeight && sectionBound.bottom <= window.innerHeight){
                section.classList.add('active')
                navMenuElement.classList.add('menu__link_active')
            } else {
                section.classList.remove('active')
                navMenuElement.classList.remove('menu__link_active')
            }
        }
    })
}


buildNavigationBar();

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


