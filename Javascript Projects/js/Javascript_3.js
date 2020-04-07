function displayType (mineral) {
    var mineralType = mineral.getAttribute("data-mineral-type");
    alert(mineralType + " is a " + mineral.innerHTML + " mineral.");
}