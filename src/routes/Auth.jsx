import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import useAuthentication from '../hooks/useAuthentication';

export default function Auth() {
  const [form, setForm] = useState({ login: '', password: '' });
  const [error, setError] = useState();

  const [auth, login, logout] = useAuthentication();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form.login, form.password);
      navigate('/');
    } catch (e) {
      setForm({ login: '', password: '' });
      setError(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login">
      <Input
        value={form.login}
        onChange={(e) => setForm({ ...form, login: e.target.value })}
        name="login"
        type="text"
      />
      <Input
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        name="password"
        type="password"
      />
      {error && <div>{error}</div>}
      <Button className="btn">Login</Button>
    </form>
  );
}
