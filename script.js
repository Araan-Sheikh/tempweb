document.getElementById('subdomain-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const subdomainInput = this.querySelector('input[type="text"]');
    const subdomain = subdomainInput.value;

    // Perform an API call or submit the form to your backend
    alert(`Subdomain ${subdomain}.is-cod.in created!`);
    subdomainInput.value = ''; // Clear input
});
