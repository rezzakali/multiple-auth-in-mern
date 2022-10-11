import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import './App.css';

function App() {
  const google = () => {
    window.open('http://localhost:5000/auth/google', '_self');
  };
  const facebook = () => {
    window.open('http://localhost:5000/auth/facebook', '_self');
  };
  const github = () => {
    window.open('http://localhost:5000/auth/github', '_self');
  };
  return (
    <div className="App">
      <h1>Different Authentication</h1>
      <button type="button" onClick={google}>
        <FcGoogle />
        Login with Google
      </button>
      <br />
      <br />
      <button type="button" onClick={facebook}>
        <FaFacebook />
        Login with Facebook
      </button>
      <br />
      <br />
      <button type="button" onClick={github}>
        <FaGithub />
        Login with Github
      </button>
    </div>
  );
}

export default App;
