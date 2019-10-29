if(!sessionStorage.getItem('moscEventId')){
    window.location.href='http://localhost:5500/events.html';
}

var id = sessionStorage.getItem('moscEventId');
var dumpArea = document.getElementById('eventDumpArea');
var data = "";

var db = firebase.firestore();

db.collection('events').doc(id).get().then((doc) => {
   var event = doc.data();
   data += `
   <div class="row">
       <div class="col-md-12 col-sm-12" style="marggin:0;">
           <img src="${event.image}" class="event-d-img">    
       </div>
   </div>
   <div class="row" style="padding-left:3%; padding-right:3%; padding-top:3%">
       <div class="col-md-12 col-sm-12">
           <h4 class="event-d-heading">About the Event</h4>
           <p style="font-size:1.2rem">${event.description}</p>   
       </div>
   </div>
   <div class="row" style="padding-left:3%; padding-right:3%; padding-top:3%">
       <div class="col-md-12 col-sm-12">
           <h4 class="event-d-heading">Venue</h4>
           <p style="font-size:1.2rem">${event.venue}</p>   
       </div>
   </div>

   `;

   if(event.date){
    data += `
    <div class="row" style="padding-left:3%; padding-right:3%; padding-top:3%">
    <div class="col-md-12 col-sm-12">
        <h4 class="event-d-heading">Date</h4>
        <p style="font-size:1.2rem">${event.date}</p>   
    </div>
</div>`;

}


   if(event.time){
       data += `
       <div class="row" style="padding-left:3%; padding-right:3%; padding-top:3%">
       <div class="col-md-12 col-sm-12">
           <h4 class="event-d-heading">Venue</h4>
           <p style="font-size:1.2rem">${event.time}</p>   
       </div>
   </div>`;

   }

   if(event.winners){
    data += `
    <div class="row" style="padding-left:3%; padding-right:3%; padding-top:3%">
    <div class="col-md-12 col-sm-12">
        <h4 class="event-d-heading">Winners</h4><ol style="padding:1rem">`;
            event.winners.forEach((winner) => {
                data += `<li>${winner}</li>`
            })
        data+=`</ol></div>
    </div>`;
   }

   dumpArea.innerHTML=data;
});

