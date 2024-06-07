console.log("JavaScript Running ...")

function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    
    let formattedViews;

    if (views >= 1000000) {
        formattedViews = (views / 1000000).toFixed(1) + 'M';
    } else if (views >= 1000) {
        formattedViews = (views / 1000).toFixed(0) + 'K';
    } else {
        formattedViews = views.toString();
    }

    const boxHTML = `
    <div class="box">
        <div class="img">
            <img src="${thumbnail}" alt="">
            <span class="duration">${duration}</span>
        </div>
        <div class="headline">
            <h2>${title}</h2>
            <div class="channal">
                <span>${cName}</span>
                <span>${formattedViews} views</span>
                <span>${monthsOld} months ago</span>
            </div>
        </div>
    </div>
    `;
    
    // To use this HTML string to create a new element and append it to the .container:
    document.querySelector(".container").insertAdjacentHTML('beforeend', boxHTML);

    // // Select the original .box element
    // let originalBox = document.querySelector(".box");

    // // Create a new .box element
    // let newBox = document.createElement('div');
    // newBox.className = 'box';

    // // Copy the inner content
    // newBox.innerHTML = originalBox.innerHTML;

    // // Append the new .box element to the .container
    // document.querySelector(".container").append(newBox);

}





// createCard("Introduction to Backend | Sigma Web Dev video #2", "Anni", 560000, 7, "1:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")






