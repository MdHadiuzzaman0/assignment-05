

// let  allIssue=[];
// const cardContainer=document.getElementById('cardContainer')
// const cardContainerSection=document.getElementById('cardContainerSection')
// const totalIssue=document.getElementById('totalIssue')
// const modalContainer=document.getElementById('modalContainer')
// const spinner=document.getElementById('spinner')
// const noIssueCard=document.getElementById("noIssueCard")

// function showSpinner(){
// spinner.classList.remove('hidden');
// }

// function hideSpinner(){
// spinner.classList.add('hidden');
// }

// // button toggle 
// function showOnly(id){
//     const selected = document.getElementById(id);
//     const active=selected.classList.contains("bg-[#4A00FF]")
//     document.querySelectorAll("#btnSection .btn").forEach(allBtn => {
//         allBtn.classList.remove("bg-[#4A00FF]", "text-white")
//         // allBtn.classList.add("bg-gold-300", "text-black")
//     });

    
//     if(!active){
//         selected.classList.add("bg-[#4A00FF]", "text-white")
//     }
// }

// //main function
// function loadCard(){
//     fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
//    .then (response => response.json())
//    .then ( alldata => {
//     allIssue=alldata.data;
//     // console.log(alldata);
//     // console.log(allIssue);
//  })
// }
// loadCard()

// // function allbtn(){
// //     showSpinner()
// //     showCard(allIssue);
// //     hideSpinner(); 
    
// // }

// // function openbtn(){
// //     showSpinner() 
// //     const openIssue=allIssue.filter(item => item.status === "open")
// //     showCard(openIssue);
// //     hideSpinner(); 
// // }

// // function closedbtn(){
// //     showSpinner()
// //     const closedIssue=allIssue.filter(item => item.status === "closed")
// //     hideSpinner(); 
// //     showCard(closedIssue);
    

// // }

// document.getElementById('allBtn').addEventListener('click', function() {
//     showOnly('allBtn'); // বাটন স্টাইল পরিবর্তন
//     showSpinner();
//     showCard(allIssue); // সব ইস্যু দেখানো
//     hideSpinner();
// });

// document.getElementById('openBtn').addEventListener('click', function() {
//     showOnly('openBtn');
//     showSpinner();
//     const openIssue = allIssue.filter(item => item.status === "open");
//     showCard(openIssue);
//     hideSpinner();
// });

// document.getElementById('closedBtn').addEventListener('click', function() {
//     showOnly('closedBtn');
//     showSpinner();
//     const closedIssue = allIssue.filter(item => item.status === "closed");
//     showCard(closedIssue);
//     hideSpinner();
// });

// function showCard(cardData){
    
//     console.log(cardData.length)
//     // totalIssue.innerHTML=`<h3 class="font-bold text-[20px]">${cardData.length} Issues</h3>`
//     // totalIssue.innerText = cardData.length + " " + "Issues";
//     totalIssue.innerText = `${cardData.length} Issues`;

//     if(cardContainer.children.length == cardData.length){
//         cardContainer.innerHTML = `<div class="text-center col-span-4 mt-8 bg-white">
//             <h1 class="text-2xl font-bold">No Issues Found!</h1>
//             <p>Try searching for something else.</p>
//             </div>`;
//         totalIssue.innerHTML = `0 Issue`
//         return;
//     }
    
//     cardContainer.innerHTML='';
//     noIssueCard.classList.remove("p-6")
//     noIssueCard.innerHTML=" ";
//     cardContainerSection.classList.add("p-8", "bg-white");

//     cardData.forEach(element => {

//         const createdAt= new Date(element.createdAt);
//         const date=createdAt.toLocaleDateString();
//         // console.log(date);

//         const cardDiv=document.createElement('div');
//         cardDiv.className=`w-[290px] mx-auto rounded-lg p-5 space-y-6 border border-black/20 border-t-8  shadow-lg ${element.status === 'open'? 'border-t-green-400 ' : 'border-t-[#A855F7]'}`

//         cardDiv.innerHTML=`
//         <div class="flex justify-between font-bold "> 
//             ${element.status === 'open'? `<img src="./assets/Open-Status.png" alt="" class='h-full'>` : `<img src="./assets/Closed- Status .png" alt="" class='h-full'>`}

//          ${element.priority == 'high' ? `<h3 class="py-1 px-6 bg-[#FEECEC] text-red-400 rounded-lg">HIGH</h3>` : element.priority == 'medium' ? `<h3 class="py-1 px-6 bg-[#FFF6D1] text-amber-400 rounded-lg">MEDIUM</h3>` : `<h3 class="py-1 px-6 bg-[#EEEFF2] text-[#9CA3AF] rounded-lg">LOW</h3>`}
//             </div>

//             <div class="h-[76px] space-y-2 mb-13">
//                 <h3 onclick="modalInfo('${element.id}')" class="font-bold cursor-pointer">${element.title}</h3>
//                 <p  onclick="modalInfo('${element.id}')"  class="line-clamp-2 text-[#64748B] text-[14px] cursor-pointer">${element.description}</p>
//             </div>

//             <div class="flex flex-wrap gap-2">
//              ${element.labels.map(label => {
//              const color = label;
             
//              const colorClass = 
//                  color === 'bug' ? 'bg-red-100 text-red-600 border-red-200' : 
//                  color === 'enhancement' ? 'bg-blue-100 text-blue-600 border-blue-200' : 
//                  color === 'help wanted' ? 'bg-green-100 text-green-600 border-green-200' : 
//                  color === 'good first issue' ? 'bg-purple-100 text-purple-600 border-purple-200' : 
//                  color === 'documentation' ? 'bg-slate-100 text-slate-600 border-slate-200' : 
//                  'bg-gray-100 text-gray-500 border-gray-200';
     
//              return `<h3 class="py-1 px-3 border rounded-full text-[10px] font-bold uppercase ${colorClass}">${label}</h3>`;
//              }).join("")}
//             </div>

//             <hr class="text-[#64748B]/40">

//             <div>
//                 <h3 class="line-clamp-2 text-[#64748B] text-[14px]">#1 by ${element.author}</h3>
//                 <h3 class="line-clamp-2 text-[#64748B] text-[14px]">${date}</h3>
//             </div>`

//             cardContainer.append(cardDiv)
//     });
    
// }

// async function modalInfo(issueId){
//     modalContainer.innerHTML="";
//     console.log(issueId)
//     const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${issueId}`)
//     const data = await res.json();
    
//     const date= new Date(data.data.createdAt);
//     const time= date.toLocaleDateString();

//         // console.log(element);
//         const modalDiv=document.createElement('div');
//         modalDiv.className='w-[700px] mx-auto p-5 border rounded-xl space-y-3'
//         modalDiv.innerHTML=`
//         <h1 class="font-bold">${data.data.title}</h1>
//         <div class="flex gap-4 items-center">
//             <h3 class="text-black font-bold ${data.data.status === 'open'? "bg-green-400" : "bg-[#A855F7]"} uppercase rounded-xl px-4 py-2">${data.data.status}</h3> <i class="fa-solid fa-circle"></i>
//             <p class="tetx-[14px] text-[#64748B]"> Opened by ${data.data.assignee}</p> <i class="fa-solid fa-circle"></i> 
//             <p class="tetx-[14px] text-[#64748B]">${time}</p>
//         </div>

//         <div class="flex gap-5">
//             ${data.data.labels.map(label => {
//         const color = label.toLowerCase().trim();
        
       
//         const colorClass = 
//             color === 'bug' ? 'bg-red-100 text-red-600 border-red-200' : 
//             color === 'enhancement' ? 'bg-blue-100 text-blue-600 border-blue-200' : 
//             color === 'help wanted' ? 'bg-green-100 text-green-600 border-green-200' : 
//             color === 'good first issue' ? 'bg-purple-100 text-purple-600 border-purple-200' : 
//             color === 'documentation' ? 'bg-slate-100 text-slate-600 border-slate-200' : 
//             'bg-gray-100 text-gray-500 border-gray-200';

//         return `<h3 class="py-1 px-3 border rounded-full text-[11px] font-bold uppercase ${colorClass}">${label}</h3>`;
//     }).join("")}
//         </div>

//         <P class="text-[#64748B]">${data.data.description}</P>

//         <div class="flex gap-59 mt-9 bg-[#F8FAFC] p-4 rounded-xl">
//             <div>
//                 <p class="tetx-[14px] text-[#64748B]">Assignee:</p>
//                 <p class="font-bold">${data.data.assignee}</p>
//             </div>

//             <div>
//                 <p class="text-[14px] text-[#64748B] mb-1">Priority:</p>
//                 <p>${data.data.priority == 'high' ? `<h3 class="py-1 font-bold px-6 bg-[#FEECEC] text-red-400 rounded-lg">HIGH</h3>` : data.data.priority == 'medium' ? `<h3 class="py-1 font-bold px-6 bg-[#FFF6D1] text-amber-400 rounded-lg">MEDIUM</h3>` : `<h3 class="py-1 px-6 font-bold bg-[#EEEFF2] text-[#9CA3AF] rounded-lg">LOW</h3>`}</p>
//             </div>
//         </div>`
//         modalContainer.append(modalDiv)
//         document.getElementById('issue_modal').showModal()
//     ;
// }

// //SearchBox
// document.getElementById('searchBtn').addEventListener("click", function(){
//     const input=document.getElementById('inputSearch');
//     const searchText=input.value.trim();
//     // console.log(value);
//     // const data=allIssue;
//     // console.log(data);

//     noIssueCard.classList.remove("p-6")
//     noIssueCard.innerHTML=" ";
    
//     if (searchText === "") {
//         alert("Empty SearchBox");
//         return;
//     }

//     fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`)
//         .then(res => res.json())
//         .then(data => {
//             // console.log(data);
            
//             if (data.data.length > 0) {
//                 cardContainer.innerHTML='';
//                 showCard(data.data);
//             } 
//             else {
//                 cardContainer.innerHTML = ` `;
//                 alert('This word is not found')
//                 totalIssue.innerText = `0 Issues`;
//             }

//             document.querySelectorAll("#btnSection .btn").forEach(allbtn=>{
//                 allbtn.classList.remove("bg-[#4A00FF]", "text-white")
//             })
//         })
    
// })

