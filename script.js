console.log("working")


fetch('https://whatyearisit-backend-seven-gules.vercel.app/year')
.then(response => response.json())
.then(data => {
    document.querySelector("#year").textContent= data.year;
});

