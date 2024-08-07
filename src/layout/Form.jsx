import { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [philosophy, setPhilosophy] = useState('Não sei');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, age, email, philosophy });
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <div className="form-group">
        <label>
          Nome:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Idade:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Filosofia Libertária:
          <select
            value={philosophy}
            onChange={(e) => setPhilosophy(e.target.value)}
          >
            <option value="Brutalista">Brutalista</option>
            <option value="Gradualista">Gradualista</option>
            <option value="Agorista">Agorista</option>
            <option value="Não sei">Não sei</option>
          </select>
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;
