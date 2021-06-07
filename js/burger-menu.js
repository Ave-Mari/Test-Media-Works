function burgerClick() {
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerMenuList = document.querySelector('.nav-burger');
        if ("" === burgerMenu.getAttribute("data-state")) {
            burgerMenu.setAttribute("data-state", "active");
        } else {
            burgerMenu.setAttribute("data-state", "");
        }


        if ("active" === burgerMenu.getAttribute("data-state")) {
            burgerMenuList.style.left = '0';
            burgerMenuList.style.height = '165px';
        } else {
            burgerMenuList.style.left = '-9999999999%';
            burgerMenuList.style.height = '0';
        }

        
}
