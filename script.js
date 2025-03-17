function loginUser() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (username === "vendor" && password === "vendor123") {
        window.location.href = "vendor.html";  // Vendor ke liye page
    } else if (username === "customer" && password === "customer123") {
        window.location.href = "customer.html";  // Customer ke liye page
    } else {
        alert("Invalid username or password!");
    }
}