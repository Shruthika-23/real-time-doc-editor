document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    document.getElementById("result").innerText = 
        Thanks ${name}! We received your message: "${message}";
});
