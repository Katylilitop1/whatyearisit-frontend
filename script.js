console.log("working")


fetch('whatyearisit-backend-seven-gules.vercel.app')
.then(response => response.json())
.then(data => {
    document.querySelector("#year").textContent= data.year;
});

