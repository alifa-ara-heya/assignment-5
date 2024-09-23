// making the blog button open to another page
document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = "./blog.html"
})


// Function to get input value from an element by ID and convert it to a float
function getInputValueById(id){
    return parseFloat(document.getElementById(id).value);  
}

// Function to get the inner text of an element by ID and convert it to a float
function getInnerNumberById(id){
    return parseFloat(document.getElementById(id).innerText);
}

// function to calculate the donation
function calculateDonation(donateButtonId, donateInputId, balanceId, donationAmountId){
    document.getElementById(donateButtonId).addEventListener('click', function(){
        const inputValue = getInputValueById(donateInputId);
        const balanceValue = getInnerNumberById(balanceId);
        const donationAmount = getInnerNumberById(donationAmountId);
        const newBalance = balanceValue - inputValue;
        document.getElementById(donationAmountId).innerText = inputValue;
        document.getElementById(balanceId).innerText = newBalance;
        console.log({inputValue, balanceValue, donationAmount});
    })
}


calculateDonation('donate-btn-1', 'donate-input-1', 'balance','donation-amount-1');

calculateDonation('donate-btn-2', 'donate-input-2', 'balance','donation-amount-2');

calculateDonation('donate-btn-3', 'donate-input-3', 'balance','donation-amount-3');