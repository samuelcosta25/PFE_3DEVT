import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div>
      <h1>Olá, React!</h1>
      <p>Estou alterando meu primeiro componente.</p>

      <Perfil nome="Samuel" cargo="Instrutor" />
      <Perfil nome="Miguel" cargo="Dev Senior" />
      <Saudacao />
      <Saudacao />
      <Saudacao />
      <Painel />
      <h6> Aqui está um teste de State e Hooks: </h6>
      <PlacarFutebol nomeTimeA="Corinthians" nomeTimeB="Flamengo"/>
    </div>

  )
}
export default App

function Saudacao() {
  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
      <h2 style={{ color: '#007bff' }}>Olá, Alunos!</h2>
      <p>Este componente foi criado separadamente.</p>
    </div>
  );
}

function Painel() {
  const [texto, setTexto] = useState('');

  return (
    <div style={{ background: '#f9f9f9', padding: '15px', border: '1px dashed #666', marginTop: '20px' }}>
      <h4>Escreva uma mensagem:</h4>
      <input
        type="text"
        placeholder="Digite algo..."
        onChange={(e) => setTexto(e.target.value)}
        style={{ padding: '8px', width: '80%' }}
      />
      <p>O que você digitou: <span style={{ color: 'blue' }}>{texto}</span></p>
    </div>
  );
}


// Definindo o componente Perfil
function Perfil({ nome, cargo }) {
  return (
    <div style={{
      border: '2px solid #2e7d32',
      borderRadius: '12px',
      padding: '15px',
      margin: '10px 0',
      backgroundColor: '#f1f8e9',
      boxShadow: '2px 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ margin: '0 0 5px 0', color: '#1b5e20' }}>
        👤 Nome: {nome}
      </h3>
      <p style={{ margin: 0, color: '#444' }}>
        📚 Cargo: <strong>{cargo}</strong>
      </p>
    </div>
  );
}

function PlacarFutebol({ nomeTimeA, nomeTimeB }) {
  // Criamos duas "caixinhas de memória" (States)
  const [golsA, setGolsA] = useState(0);
  const [golsB, setGolsB] = useState(0);

  return (
    <div style={{
      border: '3px solid #2e7d32',
      borderRadius: '15px',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#f1f8e9',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '400px',
      margin: '20px auto'
    }}>
      <h2 style={{ color: '#1b5e20' }}>⚽ Placar do Jogo</h2>

      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>

        {/* Lado do Time A */}
        <div>
          <h3>{nomeTimeA}</h3>
          <h1 style={{ fontSize: '48px', margin: '10px 0' }}>{golsA}</h1>
          <button onClick={() => setGolsA(golsA + 1)} style={botaoEstilo}>
            GOL!
          </button>
        </div>

        <h1 style={{ margin: '0 20px' }}>X</h1>

        {/* Lado do Time B */}
        <div>
          <h3>{nomeTimeB}</h3>
          <h1 style={{ fontSize: '48px', margin: '10px 0' }}>{golsB}</h1>
          <button onClick={() => setGolsB(golsB + 1)} style={botaoEstilo}>
            GOL!
          </button>
        </div>

      </div>

      <hr style={{ margin: '20px 0' }} />

      <button
        onClick={() => { setGolsA(0); setGolsB(0); }}
        style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}
      >
        Reiniciar Partida 🔄
      </button>
    </div>
  );
}

// Estilo simples para os botões de GOL
const botaoEstilo = {
  backgroundColor: '#2e7d32',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
  fontWeight: 'bold'
};



// Crie 2 componentes, chamados Perfil e Painel respectivamente e adicione alguma frase e estilização à sua escolha. Obs: Não se esqueça de chama-los no Componente principal (App)

// Crie 1 novo componente que receba ao menos 3 propriedades e as utilize para alguma exibição. Obs: não esqueça de passar essas propriedades quando chamar esse componentes no APP
