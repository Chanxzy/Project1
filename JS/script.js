/// Call welcomeMessage function to prompt user and display welcome message
welcomeMessage();

function welcomeMessage() {
    /// Prompt user for their name
    const userInput = prompt('Please enter your name:');

    /// Get the welcome-speech DOM element
    const welcomDOM = document.getElementById('welcome-speech');

    /// Check if userInput is null or empty
    if (userInput === null || userInput.trim() === '') {
        /// Render default welcome message
        welcomDOM.innerHTML = 'Welcome, Guest!';
    } else {
        /// Render personalized welcome message
        welcomDOM.innerHTML = 'Welcome, ' + userInput + '!';
    }
}

/// Script Toggle Menu 
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!menuBtn || !mobileMenu) return;

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
});


/// Form input elements and preview box
document.addEventListener("DOMContentLoaded", () => {

    const nameInput = document.getElementById("name");
    const dobInput = document.getElementById("dob");
    const messageInput = document.getElementById("message");
    const genderInputs = document.querySelectorAll("input[name='gender']");
    const previewBox = document.getElementById("previewBox");
    const submitBtn = document.getElementById("submitBtn");

    function showPreview() {
        const name = nameInput.value.trim();
        const dob = dobInput.value;
        const message = messageInput.value.trim();
        const gender = [...genderInputs].find(g => g.checked)?.value || "-";
        // VALIDASI PESAN
        if (message === "") {
            alert("Pesan tidak boleh kosong!");
            return;
        }

        const now = new Date();

        previewBox.innerHTML = `
        <div class="space-y-4 text-sm leading-relaxed">
            <!-- TIME -->
            <div>
                <p class="font-semibold text-white/80">Current time</p>
                <p class="text-white">
                    ${now.toLocaleString("id-ID", {
                    weekday: "short",
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit"
                    })}
                </p>
            </div>
            <div class="text-white text-sm leading-relaxed space-y-1">
                <p><b>Nama</b>: ${name || "-"}</p>
                <p><b>Tanggal Lahir</b>: ${dob || "-"}</p>
                <p><b>Jenis Kelamin</b>: ${gender || "-"}</p>
                <p><b>Pesan</b>: ${message || "-"}</p>
            </div>
        </div>
        `;
    }

    // EVENT KLIK SUBMIT
    submitBtn.addEventListener("click", showPreview);
});



/// Placeholder for form validation function
function validateForm() { }