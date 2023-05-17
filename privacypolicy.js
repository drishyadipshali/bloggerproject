document.getElementById("privacyForm").addEventListener("submit", function(event) {
    event.preventDefault();
    generatePrivacyPolicy();
});

function generatePrivacyPolicy() {
    var companyName = document.getElementById("companyName").value;
    var websiteUrl = document.getElementById("websiteUrl").value;
    var email = document.getElementById("email").value;

    var privacyPolicyText = "Privacy Policy\n\n";
    privacyPolicyText += "Company Name: " + companyName + "\n";
    privacyPolicyText += "Website URL: " + websiteUrl + "\n";
    privacyPolicyText += "Contact Email: " + email + "\n";
    // Add more privacy policy content here based on your requirements

    document.getElementById("privacyPolicy").textContent = privacyPolicyText;
}
