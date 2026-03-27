import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

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
      <p>O que você digitou: <span style={{ color: 'red' }}>{texto}</span></p>
    </div>
  );
}


// Definindo o componente Perfil
function Perfil({ teste, cargo }) {
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
        👤 Nome: {teste}
      </h3>
      <p style={{ margin: 0, color: '#444' }}>
        📚 Cargo: <strong>{cargo}</strong>
      </p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Olá, React!</h1>
      <p>Estou alterando meu primeiro componente.</p>

      <div style={{ padding: '20px' }}>
      <h1>Minha Primeira Aula de React</h1>
      <hr/>
      
      {/* 3. Aqui nós "chamamos" o componente que criamos acima */}

      {/* Comentario aqui */}

      <Perfil teste = "Julio" cargo = "Full-Stack"/>
      <Perfil teste = "Murilo" cargo = "Dev Senior"/>
      <Saudacao/>
      <Saudacao/>
      <Saudacao/>
      <Painel/>

      <p>Note que eu posso repetir o componente quantas vezes eu quiser!</p>
    </div>
    
    </div>
   // Comentário aqui
  )
}
export default App

// Crie mais 2 componentes de estilização á seu gosto e os insira no App

// Escolha 1 dos componentes criados e faça as alterações necessárias para que ele passe, receba e exiba props