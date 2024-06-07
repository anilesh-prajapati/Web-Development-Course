
function createCard(title, cName, views, monthsOld, duration, thumbnail) {

    let formattedViews;

    if (views >= 1000000) {
        formattedViews = (views / 1000000).toFixed(1) + 'M';
    } else if (views >= 1000) {
        formattedViews = (views / 1000).toFixed(0) + 'K';
    } else {
        formattedViews = views.toString();
    }



    let html = `<div class="box">
    <div class="image">
        <img src="${thumbnail}" alt="">
        <div class="capsul">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${formattedViews} views . ${monthsOld} months ago </p>
    </div>
</div>`


document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML +html

}

// createCard("Introduction to Backend | Sigma Web Dev video #2", "Anni", 560000, 7, "1:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
