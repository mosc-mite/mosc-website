if(sessionStorage.getItem('moscEventId')){
    sessionStorage.removeItem('moscEventId')
};

var db = firebase.firestore();
var data = "";
db.collection("events").orderBy('timestamp', 'desc').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        var event = doc.data();
        data += `
        
        <div class="col-md-4" data-id="${doc.id}" onclick="setEvent(this)">
            <div class="e-card">
                <div class="e-card-top" style="background-image:url('${event.image}')">
                </div>
                <div class="e-card-bottom">
                    <h5 class="strong">${event.name}</h5>
                    <p><i class="far fa-calendar-alt"></i>&nbsp;&nbsp;&nbsp;&nbsp;${event.date}</p>
                </div>
            </div>
        </div>`;
        document.getElementById('area').innerHTML = data;
    });

});


function setEvent(event) {
    var id = event.getAttribute("data-id");
    console.log('clicked');
    sessionStorage.setItem('moscEventId', id);
    // window.location.href='https://mosc-mite.github.io/mosc-website/eventDetails.html';
    window.location.href='eventDetails.html';}