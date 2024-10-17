const engYears=[
    "Freshman",
    "1st",
    "2nd",
    "3rd",
    "4th",
];
const medYears=[
    "1st",
    "2nd",
    "3rd",
    "4th",
     "5th",
     "6th",
     "7th",   
];
const PharmYears=[
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",   
];
const comYears=
[
    "1st",
    "2nd",
    "3rd",
    "4th", 
]
function getVal()
    { 
        selected=document.querySelector('#fac').value;
        console.log(selected);
        document.getElementById('year').innerHTML = `<option selected>Choose Year</option>`;
        document.getElementById('program').innerHTML="";
        if(selected=="Engineering")
        {
            document.getElementById('program').innerHTML=` <div class="input-group mb-3">
                    <select class="form-select bg-transparent" id="inputGroupSelect01" >
                      <option selected >Choose Program</option>
                      <option value="mainstream">Mainstream</option>
                      <option value="credit">Credit</option>
                    </select>
                  </div>`
                  engYears.forEach(year=>{
                    document.getElementById('year').innerHTML+=`<option>${year}</option>`
                  })
        }
       else if(selected=="Medicine"){
        medYears.forEach(year=>{
            document.getElementById('year').innerHTML+=`<option>${year}</option>`
          })

       }
       else if(selected=="Pharmacy"){
        PharmYears.forEach(year=>{
            document.getElementById('year').innerHTML+=`<option>${year}</option>`
          })

       } else if(selected=="Commerce"){
        comYears.forEach(year=>{
            document.getElementById('year').innerHTML+=`<option>${year}</option>`
          })

       }
    }

