const text = "Like science and technologyy";
  const typingElement = document.getElementById("typing");
  let i = 0;
  let deleting = false;

  function typeEffect() {
    if (!deleting && i <= text.length) {
      typingElement.textContent = text.substring(0, i);
      i++;
    } else if (deleting && i >= 0) {
      typingElement.textContent = text.substring(0, i);
      i--;
    }

    if (i === text.length) {
      deleting = true; // mulai hapus
      setTimeout(typeEffect, 1000); // pause sebelum hapus
      return;
    } else if (i === 0) {
      deleting = false; // ulang lagi
    }

    setTimeout(typeEffect, deleting ? 50 : 100); // kecepatan hapus vs ketik
  }
  typeEffect();
 const images = ["./image1.jpeg", "./image2.jpeg"];
  let index = 0;
  const imgElement = document.getElementById("profileImage");

  setInterval(() => {
    index = (index + 1) % images.length; // looping
    imgElement.src = images[index];
  }, 3000); // ganti tiap 3 detik
  const interests = [
    { img: "./IMG_interest1.png", text: "COMPUTER VISION" },
    { img: "./IMG_interest2.png", text: "ALGORITMA DAN DATA STRUCTURE" },
    { img: "./IMG_interest3.png", text: "MACHINE LEARNING DAN DEEP LEARNING" },
    { img: "./IMG_interest4.png", text: "PENGEMBANGAN PERANGKAT LUNAK" }
  ];

  const listContainer = document.getElementById("interestList");

  interests.forEach(item => {
    const li = document.createElement("li");
    li.className = "flex flex-col items-center";

    li.innerHTML = `
      <img src="${item.img}" alt="${item.text}"
           class="w-28 h-28 object-cover rounded-lg shadow-md">
      <p class="mt-2 text-sm font-medium">${item.text}</p>
    `;

    listContainer.appendChild(li);
  });