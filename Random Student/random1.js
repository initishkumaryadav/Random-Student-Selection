let btn1 = document.querySelector("#btn1");
let main2= document.querySelector("#main2");
let main6= document.querySelector("#main6");
let box = document.querySelectorAll('.wheel1');
alert("Welcome \nFeeling lucky today? Let’s see who gets to answer the next question\nClick the button below to generate a random student name.\n Will it be you? 🙏\n Psst... maybe say a little prayer to the Random Name Generator Gods!\n\n Good luck, and may the odds be ever in your favor! \n --Jai Logic");
const radioButtons = document.querySelectorAll('input[name="drone"]');
const secAList = {
    "24BCS001": "AARAV SAHNI",
    "24BCS002": "ABHISHEK SAH",
    "24BCS003": "ADITYA KUMAR",
    "24BCS004": "ADITYA YADAV",
    "24BCS005": "AGRIMA MANGOTRA",
    "24BCS006": "AKHILESH KUMAR",
    "24BCS007": "AKSHIT RAJ",
    "24BCS008": "ALOK KUMAR",
    "24BCS009": "AMAN MISHRA",
    "24BCS010": "AMANDEEP SHARMA",
    "24BCS011": "AMRIT RAJ",
    "24BCS012": "ANKIT KUMAR",
    "24BCS013": "ANKIT RAJ",
    "24BCS014": "APOORAV SHARMA",
    "24BCS015": "APOORV KUMAR",
    "24BCS016": "ARSH HARIT",
    "24BCS017": "ARYAN MISHRA",
    "24BCS018": "ASHVIN KOHLI",
    "24BCS019": "AVDESH KUMAR",
    "24BCS020": "BRIGHT",
    "24BCS021": "DHANANJAY KUMAR",
    "24BCS022": "DEEPAK KUMAR",
    "24BCS023": "DEVENDRA RAO",
    "24BCS024": "DHAIRYA VERMA",
    "24BCS025": "GARV SETHI",
    "24BCS026": "HARSH BARDHAN LAL",
    "24BCS027": "HARSH KUMAR SINGH",
    "24BCS028": "HEMANT VERMA",
    "24BCS029": "HIMANSHU KUMAR",
    "24BCS030": "HRITIK KUMAR",
    "24BCS031": "JATIN",
    "24BCS032": "JATIN BAINS",
    "24BCS033": "KALASH JAISWAL",
    "24BCS034": "KAMALJEET",
    "24BCS035": "KAVYA NANDAN",
    "24BSC036": "KINGSHUK ROY",
    "24BCS037": "KIRAT PAL SINGH",
    "24BCS038": "KRITIKA",
    "24BCS039": "KSHITIJ KUMAR SINGH",
    "24BCS040": "MADHAV BAKSHI",
    "24BCS041": "MANEESH KUMAR",
    "24BCS042": "MANISH KUMAWAT",
    "24BCS043": "MAYANK TANWAR",
    "24BCS044": "MOHIT GAUR",
    "24BCS045": "MUDIT SHARMA"
};

const secBList = {
    "24BCS046": "MUHAMMAD MANAN MALIK",
    "24BCS047": "MUKTI PORWAL",
    "24BCS048": "NARESH KUMAR",
    "24BCS049": "NASHIT HUSSAIN",
    "24BCS050": "NIKHIL KUMAR",
    "24BCS051": "NITISH KUMAR YADAV",
    "24BCS052": "PT AKSHIT BADYAL",
    "24BCS053": "PT ARMAN BADYAL",
    "24BCS054": "RAGHAV BAKSHI",
    "24BCS055": "RAHID RASOOL",
    "24BCS056": "RAHUL KUMAR KALOTRA",
    "24BCS058": "RIMJHIM KRI GUPTA",
    "24BCS059": "RISHAB RANA",
    "24BCS060": "RITVIZ VAID",
    "24BCS061": "ROHIT LODHI",
    "24BCS062": "RUDRA PRATAP SINGH SAMYAL",
    "24BCS063": "RUPESH",
    "24BCS064": "SAHIL MANOHAR",
    "24BCS065": "SARBJEET SINGH",
    "24BCS066": "SARTHAK GANGWAR",
    "24BCS067": "SATISH SINGH",
    "24BCS068": "SATYARTH KHAJURIA",
    "24BCS069": "SAURAV KASHYAP",
    "24BCS070": "SHASHANK JHA",
    "24BCS071": "SHASHWAT SINHA",
    "24BCS072": "SHASHWAT TIWARI",
    "24BCS073": "SHREYA PANDITA",
    "24BCS074": "SHUBHAM SAINI",
    "24BCS075": "SHUBHAM THORY",
    "24BCS076": "SINGH KUNAL AKHILESH",
    "24BCS077": "SONU KUMAR",
    "24BCS078": "SOURABH PANDEY",
    "24BCS079": "SRISHTI JAISWAL",
    "24BCS080": "SUBHAM PRASAD",
    "24BCS081": "SUNIL LOVEVANSHI",
    "24BCS082": "SURAJ BHANDARI",
    "24BCS083": "TANMAY BHARGAVA",
    "24BCS084": "TANVI JAMWAL",
    "24BCS085": "TUSHAR SINGH",
    "24BCS086": "UTSAV PANDEY",
    "24BCS087": "VISHAL CHOUDHARY",
    "24BCS088": "VISHAVJEET SINGH",
    "24BCS089": "VIVEK KUMAR",
    "24BCS090": "YUVRAJ SINGH"
};
const both = { ...secAList, ...secBList }; 
function randA() {
    return Math.floor(Math.random() * 45); 
}
function randB() {
    return Math.floor(Math.random() * 45); 
}
function bothAB() {
    return Math.floor(Math.random() * 91); 
}
const colors = [
    "#FFFFFF",  
    "#000000",  
    "#1E90FF",  
    "#32CD32",  
    "#FF69B4",  
    "#8A2BE2",  
    "#FF4500",  
    "#00CED1",  
    "#FFD700",  
    "#6A5ACD",  
    "#FF6347",  
    "#20B2AA",  
    "#FF8C00",  
    "#9370DB",  
    "#00FA9A",  
    "#DC143C",  
];
function wheel() { 
    setInterval(() => {
        let m = Math.floor(Math.random() *16); 
        let n = Math.floor(Math.random() *16); 
        let p = box[m];
        let z=colors[n];
        
        p.style.backgroundColor =z; 
       
       
    }, 100); }
wheel();
btn1.addEventListener("click", function () {
    btn1.textContent="Next";
    wheel();
    let selectedOption = null;
    radioButtons.forEach(radio => {
        if (radio.checked) {
            selectedOption = radio.value;
        }
    });

    if (selectedOption) {
        let randomIndex, studentId, studentName;
        switch (selectedOption) {
            case "A":
                randomIndex = randA();
                studentId = Object.keys(secAList)[randomIndex];
                studentName = secAList[studentId];
                let m = `Selected Student: ${studentName} (${studentId})`;
                console.log(m);
                main6.textContent=`Selected Student: ${studentName} (${studentId})`;
                break;
            case "B":
                randomIndex = randB();
                studentId = Object.keys(secBList)[randomIndex];
                studentName = secBList[studentId];
                let p= `Selected Student: ${studentName} (${studentId})`;
                console.log(p);
                main6.textContent=`Selected Student: ${studentName} (${studentId})`;
                break;
            case "Both":
                randomIndex = bothAB();
                studentId = Object.keys(both)[randomIndex];
                studentName = both[studentId];
                let mp= `Selected Student: ${studentName} (${studentId})`;
                console.log(mp);
                main6.textContent=`Selected Student: ${studentName} (${studentId})`;
                break;
            default:
                output.textContent = "No option selected.";
                break;
        }
    } else {
        output.textContent = "Please select an option before spinning.";
    }
});
