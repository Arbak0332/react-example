function filter(){
    // Get all elements with class "collapse"
    const collapses = document.querySelectorAll(".collapse");

    // Loop through each collapse and add event listeners
    collapses.forEach((collapse) => {
        collapse.addEventListener("show.bs.collapse", function () {
            // Get the card header that triggered the event
            const cardHeader = this.parentElement.querySelector(".card-header");
            // Get all elements with class "bi" inside the card header
            const bis = cardHeader.querySelectorAll(".bi");
            // Remove the "bi-plus" class and add the "bi-dash" class to all elements with that class
            bis.forEach((bi) => {
                bi.classList.remove("bi-plus");
                bi.classList.add("bi-dash");
            });
        });
        collapse.addEventListener("hide.bs.collapse", function () {
            // Get the card header that triggered the event
            const cardHeader = this.parentElement.querySelector(".card-header");
            // Get all elements with class "bi" inside the card header
            const bis = cardHeader.querySelectorAll(".bi");
            // Remove the "bi-dash" class and add the "bi-plus" class to all elements with that class
            bis.forEach((bi) => {
                bi.classList.remove("bi-dash");
                bi.classList.add("bi-plus");
            });
        });
    });

}

export {filter}