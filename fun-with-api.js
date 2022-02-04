
    fetch('http://www.boredapi.com/api/activity/')
    .then(res => res.json())
    .then(data => {
        document.getElementById("activity2").innerText = data.activity;
    })


        function writeSomething(){
            fetch('http://www.boredapi.com/api/activity/')
            .then(res => res.json())
            .then(data => {
                document.getElementById("activity").innerText = data.activity;
        })
        };
        writeSomething();
        setInterval(() => {
            writeSomething();
        }, 6000);

        