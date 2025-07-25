
document.getElementById("deployForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const botName = document.getElementById("botName").value;
  const owner = document.getElementById("owner").value;
  const pairCode = document.getElementById("pairCode").value;

  document.getElementById("status").textContent = `🚀 Deploying botName...`;

  // Simulated deploy
  setTimeout(() => 
    document.getElementById("status").textContent = `✅{botName} deployed successfully!`;
  }, 2000);
});
