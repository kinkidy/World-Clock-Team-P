
console.log('WeJapa Team P');
// https://world-time2.p.rapidapi.com/timezone/Europe/London
// fetch("https://world-clock.p.rapidapi.com/json/est/now", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "world-clock.p.rapidapi.com",
// 		"x-rapidapi-key": "b440e25bf5msh5ac33c2f8f4b475p181cabjsn769b423c581e"
// 	}
// })
// .then(response => {
//     console.log(response);
//     return response.json()
//   })
//   .then(time => {
//     console.log(time.currentDateTime);
//     console.log(time.utcOffset);
//     let dateTime = new Date (time.currentDateTime);
//     let localTime = dateTime.toLocaleTimeString('en-US');
    
//     console.log(dateTime);
//     document.getElementById("time-display").innerHTML = dateTime;
//     document.getElementById("time").innerHTML = localTime;

//   })
//   .catch(err => {
//     console.log(err);
//   });

function worldClockIP () {
  fetch("http://worldtimeapi.org/api/ip")
  .then(response => {
      console.log(response);
      return response.json()
    })
    .then(time => {
      let dateTime = new Date (time.datetime);
      let localTime = dateTime.toLocaleTimeString('en-US');
      
      console.log(dateTime);
      document.getElementById("time-display").innerHTML = dateTime;
    })
    .catch(err => {
      console.log(err);
    });
}
  setInterval(worldClockIP, 1000);

  function worldClockKenya () {
    fetch("http://worldtimeapi.org/api/timezone/africa/nairobi")
    .then(response => {
        console.log(response);
        return response.json()
      })
      .then(time => {
        let dateTime = new Date (time.datetime);
        console.log(dateTime);
        let localTime = dateTime.toLocaleTimeString('en-US');
        
        console.log(dateTime);
        document.getElementById("time").innerHTML = dateTime;
    
      })
      .catch(err => {
        console.log(err);
      });
  }
    setInterval(worldClockKenya, 1000);

    function londonTime () {
      fetch("http://worldtimeapi.org/api/timezone/Europe/london")
      .then(response => {
          console.log(response);
          return response.json()
        })
        .then(time => {
          let dateTime = new Date (time.datetime);
          let localTime = dateTime.toLocaleTimeString('en-US');
          
          document.getElementById("london-time").innerHTML = localTime;
      
        })
        .catch(err => {
          console.log(err);
        });
    }
      setInterval(americaTime, 1000);

      function americaTime () {
        fetch("http://worldtimeapi.org/api/timezone/America/chicago")
        .then(response => {
            console.log(response);
            return response.json()
          })
          .then(time => {
            let dateTime = new Date (time.datetime);
            let localTime = dateTime.toLocaleTimeString('en-US');
            
            document.getElementById("america-time").innerHTML = localTime;
        
          })
          .catch(err => {
            console.log(err);
          });
      }
        setInterval(americaTime, 1000);