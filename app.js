// console.log(messagevalue)
const loadData = (message)=>{
    console.log(message)
    fetch('api.json')
    .then(res=>res.json())
    .then(data=>{
        const ansObj = data.find(quse => quse.qus.toLowerCase() == message)
        displayAnswer(ansObj)
    })
}


const displayAnswer =(ansObj)=>{
    const messagevalue = document.getElementById("message");
    const showContainer = document.getElementById('ans-show-area');
    const userDiv = document.createElement("div");
    userDiv.classList.add('user-message-container')
    userDiv.innerHTML=`
    <div class="user-message-container">
        <span class="user-message">
            <div>
                <img class="user-image" src="nafismahamudshahin.png" alt="">
            </div>
            </h5>${messagevalue.value}</h5>
        </span>
    </div>
    `;
    const answerDiv = document.createElement("div");
    answerDiv.innerHTML=`
    <div class="user-message-container">
        <span class="user-message">
            <div>
                <img class="user-image" src="chatbot.jpg" alt="">
            </div>
            </h5>${ansObj.answer}</h5>
        </span>
    </div>
    `;
    showContainer.appendChild(userDiv);
    setTimeout(() => {
        showContainer.appendChild(answerDiv);
    }, 1000);
    messagevalue.value = "";
}

const userMessage =()=>{
    const messagevalue = document.getElementById("message");
    const messageLowerCase = messagevalue.value.toLowerCase();
    console.log(messageLowerCase);
    loadData(messageLowerCase);
}
// loadData("how old are you");