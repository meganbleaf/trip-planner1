

module.export = function (activity, arrayLongLat) {

    let activityIcons = { 
        activities: "http://i.imgur.com/WbMOfMl.png",
        hotel: "http://i.imgur.com/D9574Cu.png", 
        restaurant: "http://i.imgur.com/cqR6pUI.png"
    }
    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    const url = `activityIcons.${activity}`
    markerDomEl.style.backgroundImage = `url(${url})`;
    


}