const daftarBtn = document.getElementById("daftarBtn");

if (daftarBtn) {
    daftarBtn.addEventListener("click", () => {
        window.location.href = "form.html";
    });
}

const fotoInput = document.getElementById("foto");
const preview = document.getElementById("preview");

if (fotoInput) {
    fotoInput.addEventListener("change", function () {

        const file = this.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function () {
                preview.innerHTML = "";

                const img = document.createElement("img");
                img.src = reader.result;
                img.style.width = "100%";
                img.style.height = "100%";
                img.style.objectFit = "cover";

                preview.appendChild(img);
            };

            reader.readAsDataURL(file);
        }
    });
}
