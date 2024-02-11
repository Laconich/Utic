document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('startBtn').addEventListener('click', function() {
      alert('¡Juego iniciado!');
    });
  
    document.getElementById('creditsBtn').addEventListener('click', function() {
      document.getElementById('credits').style.display = 'block';
    });
  
    document.getElementById('exitBtn').addEventListener('click', function() {
      if (confirm('¿Estás seguro de que quieres salir?')) {
        window.close();
      }
    });
  
    document.getElementById('credits').addEventListener('click', function() {
      document.getElementById('credits').style.display = 'none';
    });
  });
  