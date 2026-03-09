let  allIssue=[];
const cardContainer=document.getElementById('cardContainer')
const cardContainerSection=document.getElementById('cardContainerSection')
const totalIssue=document.getElementById('totalIssue')
const modalContainer=document.getElementById('modalContainer')
const spinner=document.getElementById('spinner')
const noIssueCard=document.getElementById("noIssueCard")

function showSpinner(){
spinner.classList.remove('hidden');
}

function hideSpinner(){
spinner.classList.add('hidden');
}

function showOnly(id){
    const selected = document.getElementById(id);
    const active=selected.classList.contains("bg-[#4A00FF]")
    document.querySelectorAll("#btnSection .btn").forEach(allBtn => {
        allBtn.classList.remove("bg-[#4A00FF]", "text-white")
        // allBtn.classList.add("bg-gold-300", "text-black")
    });

    
    if(!active){
        selected.classList.add("bg-[#4A00FF]", "text-white")
    }
}

function loadCard(){
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
   .then (response => response.json())
   .then ( alldata => {
    allIssue=alldata.data;
    // console.log(alldata);
    // console.log(allIssue);
 })
}
loadCard()

function allBtn(){
    showSpinner()
    showCard(allIssue);
    hideSpinner(); 
    
}

function openBtn(){
    showSpinner() 
    const openIssue=allIssue.filter(item => item.status === "open")
    showCard(openIssue);
    hideSpinner(); 
}

function closedBtn(){
    showSpinner()
    const closedIssue=allIssue.filter(item => item.status === "closed")
    hideSpinner(); 
    showCard(closedIssue);
    

}

function showCard(cardData){
    
    console.log(cardData.length)
    // totalIssue.innerHTML=`<h3 class="font-bold text-[20px]">${cardData.length} Issues</h3>`
    // totalIssue.innerText = cardData.length + " " + "Issues";
    totalIssue.innerText = `${cardData.length} Issues`;

    if(cardContainer.children.length == cardData.length){
        cardContainer.innerHTML = `<div class="text-center col-span-4 mt-8 bg-white">
            <h1 class="text-2xl font-bold">No Issues Found!</h1>
            <p>Try searching for something else.</p>
            </div>`;
        totalIssue.innerHTML = `0 Issue`
        return;
    }
    
    cardContainer.innerHTML='';
    noIssueCard.classList.remove("p-6")
    noIssueCard.innerHTML=" ";
    cardContainerSection.classList.add("p-8", "bg-white");

    cardData.forEach(element => {

        const createdAt= new Date(element.createdAt);
        const date=createdAt.toLocaleDateString();
        // console.log(date);

        const cardDiv=document.createElement('div');
        cardDiv.className=`w-[290px] rounded-lg p-5 space-y-6 border border-black/20 border-t-8  shadow-lg ${element.status === 'open'? 'border-t-green-400 ' : 'border-t-[#A855F7]'}`

        cardDiv.innerHTML=`
        <div class="flex justify-between font-bold "> 
            ${element.status === 'open'? `<img src="./assets/Open-Status.png" alt="" class='h-full'>` : `<img src="./assets/Closed- Status .png" alt="" class='h-full'>`}

         ${element.priority == 'high' ? `<h3 class="py-1 px-6 bg-[#FEECEC] text-red-400 rounded-lg">HIGH</h3>` : element.priority == 'medium' ? `<h3 class="py-1 px-6 bg-[#FFF6D1] text-amber-400 rounded-lg">MEDIUM</h3>` : `<h3 class="py-1 px-6 bg-[#EEEFF2] text-[#9CA3AF] rounded-lg">LOW</h3>`}
            </div>

            <div class="h-[76px] space-y-2 mb-13">
                <h3 onclick="modalInfo('${element.id}')" class="font-bold cursor-pointer">${element.title}</h3>
                <p  onclick="modalInfo('${element.id}')"  class="line-clamp-2 text-[#64748B] text-[14px] cursor-pointer">${element.description}</p>
            </div>

            <div class="flex flex-wrap gap-2">
             ${element.labels.map(label => {
             const val = label;
             
             const colorClass = 
                 val === 'bug' ? 'bg-red-100 text-red-600 border-red-200' : 
                 val === 'enhancement' ? 'bg-blue-100 text-blue-600 border-blue-200' : 
                 val === 'help wanted' ? 'bg-green-100 text-green-600 border-green-200' : 
                 val === 'good first issue' ? 'bg-purple-100 text-purple-600 border-purple-200' : 
                 val === 'documentation' ? 'bg-slate-100 text-slate-600 border-slate-200' : 
                 'bg-gray-100 text-gray-500 border-gray-200';
     
             return `<h3 class="py-1 px-3 border rounded-full text-[10px] font-bold uppercase ${colorClass}">${label}</h3>`;
             }).join("")}
            </div>

            <hr class="text-[#64748B]/40">

            <div>
                <h3 class="line-clamp-2 text-[#64748B] text-[14px]">#1 by ${element.author}</h3>
                <h3 class="line-clamp-2 text-[#64748B] text-[14px]">${date}</h3>
            </div>`

            cardContainer.append(cardDiv)
    });
    
}