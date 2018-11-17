$("#header").load("../Includes/header.html", function () {
    var navItemHome = document.getElementById("nav-item-home").getElementsByTagName("a")[0];
    navItemHome.setAttribute("href", "../" + navItemHome.getAttribute("href"));

    var navItemProjects = document.getElementById("nav-item-projects").getElementsByTagName("a")[0];
    navItemProjects.setAttribute("href", "../" + navItemProjects.getAttribute("href"));

    var navItemCV = document.getElementById("nav-item-cv").getElementsByTagName("a")[0];
    navItemCV.setAttribute("href", "../" + navItemCV.getAttribute("href"));

    var navbarImg = document.getElementsByClassName("navbar-img")[0];
    navbarImg.setAttribute("src", "../" + navbarImg.getAttribute("src"));
});

$("#footer").load("../Includes/footer.html", function () {
    var githubIcon = document.getElementById("github-icon");
    githubIcon.setAttribute("src", "../" + githubIcon.getAttribute("src"));

    var linkedinIcon = document.getElementById("linkedin-icon");
    linkedinIcon.setAttribute("src", "../" + linkedinIcon.getAttribute("src"));
});