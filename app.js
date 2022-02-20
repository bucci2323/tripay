let mobileMenu = document.getElementById("mobileMenu")
let mobileMenuIcon = document.getElementById('mobileMenuIcon')
let navItems = document.getElementById("navItems")

let isMenuOpen = false;


mobileMenu.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    if(isMenuOpen){
        
        navItems.style.display = "block"

        navItems.classList.add('myStyle')

        mobileMenuIcon.src = "./icons8-macos-close-30.png"

        

    }else{
        navItems.style.display = "none"
        
        navItems.classList.remove('myStyle')

        mobileMenuIcon.src = "./icons8-menu-50.png"
    }
} );