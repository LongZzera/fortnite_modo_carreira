// Dados iniciais
let playerStats = {
    wins: 0,
    losses: 0,
    points: 0,
    rank: 'Bronze',
  };
  
  // Escolha de Carreira
  function chooseCareer(career) {
    const careerSelection = document.getElementById('career-selection');
    const tryHardActions = document.getElementById('try-hard-actions');
    const contentCreatorActions = document.getElementById('content-creator-actions');
    const statsSection = document.getElementById('stats');
  
    careerSelection.style.display = 'none'; // Esconde a escolha inicial
    statsSection.style.display = 'block'; // Mostra as estatísticas
  
    if (career === 'tryHard') {
      tryHardActions.style.display = 'block'; // Mostra ações de Try Hard
    } else if (career === 'contentCreator') {
      contentCreatorActions.style.display = 'block'; // Mostra ações de Criador de Conteúdo
    }
  }
  
  // Atualiza estatísticas na tela
  function updateStats() {
    document.getElementById('wins').textContent = playerStats.wins;
    document.getElementById('losses').textContent = playerStats.losses;
    document.getElementById('points').textContent = playerStats.points;
    document.getElementById('rank').textContent = playerStats.rank;
  }
  
  // Ações de Try Hard
  function playRanked() {
    const result = Math.random() > 0.5 ? 'win' : 'loss';
    if (result === 'win') {
      playerStats.wins++;
      playerStats.points += 20;
      alert('Você venceu a partida ranqueada!');
    } else {
      playerStats.losses++;
      alert('Você perdeu a partida ranqueada!');
    }
    updateStats();
  }
  
  function train() {
    alert('Você treinou suas habilidades e ganhou experiência!');
  }
  
  function enterTournament() {
    if (playerStats.points >= 50) {
      alert('Você entrou no torneio!');
      playerStats.points -= 50;
      playRanked();
    } else {
      alert('Você precisa de pelo menos 50 pontos para entrar no torneio.');
    }
    updateStats();
  }
  
  // Ações de Criador de Conteúdo
  function playMatch() {
    const result = Math.random() > 0.5 ? 'win' : 'loss';
    if (result === 'win') {
      playerStats.wins++;
      playerStats.points += 10;
      alert('Você venceu a partida!');
    } else {
      playerStats.losses++;
      alert('Você perdeu a partida!');
    }
    updateStats();
  }
  
  function recordVideo() {
    alert('Você gravou um vídeo para o YouTube e ganhou 15 pontos!');
    playerStats.points += 15;
    updateStats();
  }
  
  function stream() {
    alert('Você fez uma live e ganhou 20 pontos!');
    playerStats.points += 20;
    updateStats();
  }
  
  function recordTikTok() {
    alert('Você gravou um TikTok e ganhou 10 pontos!');
    playerStats.points += 10;
    updateStats();
  }
  
  // Inicializa as estatísticas
  updateStats();
  
  