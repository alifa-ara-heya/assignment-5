// Function to get input value from an element by ID and convert it to a float
function getInputValueById(id) {
    return parseFloat(document.getElementById(id).value);
}

// Function to get the inner text of an element by ID and convert it to a float
function getInnerNumberById(id) {
    return parseFloat(document.getElementById(id).innerText);
}

// function to calculate the donation
function calculateDonation(donateButtonId, donateInputId, balanceId, donationAmountId, causeId) {


    document.getElementById(donateButtonId).addEventListener('click', function () {
        const inputValue = getInputValueById(donateInputId);

        if (inputValue <= 0 || isNaN(inputValue)) {
            document.getElementById(donateInputId).value = "";
            alert('Please enter a valid donation amount.');
            return;
        }


        const balanceValue = getInnerNumberById(balanceId);

        if(inputValue >= balanceValue){
            document.getElementById(donateInputId).value = "";
            alert('Your balance is insufficient');
            return;
        }
        const newBalance = balanceValue - inputValue;
        document.getElementById(donationAmountId).innerText = inputValue;
        document.getElementById(balanceId).innerText = newBalance;
        const causeText = document.getElementById(causeId).innerText;
        // console.log({inputValue, balanceValue, donationAmount});

        // adding donation history in the history section
        const historyItem = document.createElement('div');
        historyItem.className = "space-y-3 border rounded-lg p-4";
        historyItem.innerHTML = `
        <p class="text-xl font-bold">${inputValue} Taka is Donated for ${causeText}</p>
        <p class="font-light">${new Date()}</p>
        `
        const historyContainer = document.getElementById('history-section');

        document.getElementById('history-section').insertBefore(historyItem, historyContainer.firstChild);

        document.getElementById(donateInputId).value = "";


        // daisyui modal
        document.getElementById('congrats').showModal();

        
    })
}




// function to add hidden
function addHidden(id) {
    document.getElementById(id).classList.add('hidden');
}
// function to remove hidden
function removeHidden(id) {
    document.getElementById(id).classList.remove('hidden');
}


calculateDonation('donate-btn-1', 'donate-input-1', 'balance', 'donation-amount-1', 'cause-1');

calculateDonation('donate-btn-2', 'donate-input-2', 'balance', 'donation-amount-2', 'cause-2');

calculateDonation('donate-btn-3', 'donate-input-3', 'balance', 'donation-amount-3', 'cause-3');

// toggling the tabs 

document.getElementById('history-tab').addEventListener('click', function () {
    document.getElementById('history-tab').classList.add("font-semibold", "bg-primary");
    addHidden("donation-section");
    removeHidden("history-section");
    document.getElementById('donation-tab').classList.remove("font-semibold", "bg-primary");
    document.getElementById('donation-tab').classList.add("border", "border-slate-300");
})


document.getElementById('donation-tab').addEventListener('click', function () {
    removeHidden("donation-section");
    addHidden("history-section");
    document.getElementById('donation-tab').classList.add("font-semibold", "bg-primary");
    document.getElementById('history-tab').classList.remove("font-semibold", "bg-primary");
})




// making the blog button open to another page
document.getElementById('blog-btn').addEventListener('click', function () {    
    window.location.href = "./blog.html"
})
