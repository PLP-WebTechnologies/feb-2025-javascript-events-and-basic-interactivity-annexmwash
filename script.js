// 1. Button Events
document.getElementById("colorBtn").addEventListener("click", () => {
  document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
});

document.getElementById("textBtn").addEventListener("click", () => {
  document.getElementById("textTarget").textContent = "🎉 Text changed successfully!";
});

// 2. Hover Effect
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => hoverBox.style.backgroundColor = "lightblue");
hoverBox.addEventListener("mouseout", () => hoverBox.style.backgroundColor = "");

// 3. Keypress Detection
document.getElementById("keypressInput").addEventListener("keyup", (e) => {
  document.getElementById("keyFeedback").textContent = `You pressed: ${e.key}`;
});

// 4. Double Click Event
document.getElementById("secretBtn").addEventListener("dblclick", () => {
  document.getElementById("secretMessage").textContent = "🎉 Secret unlocked!";
});

// 5. Tabs
const tabButtons = document.querySelectorAll(".tabBtn");
tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tabContent").forEach(c => c.style.display = "none");
    document.getElementById("tab" + btn.dataset.tab).style.display = "block";
  });
});

// 6. Form Validation
const passwordField = document.getElementById("password");
const feedback = document.getElementById("passwordFeedback");

passwordField.addEventListener("input", () => {
  const value = passwordField.value;
  if (value.length < 8) {
    feedback.textContent = "❌ Password must be at least 8 characters.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "✅ Password looks good!";
    feedback.style.color = "green";
  }
});

document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  if (passwordField.value.length >= 8) {
    alert("Form submitted successfully!");
  } else {
    alert("Please fix the form before submitting.");
  }
});
