import { Button } from '@brandwatch/axiom-components';
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ul>
                    <ol>Import axiom components library</ol>
                    <ol>Create core with console Jest TDD</ol>
                </ul>
            </header>
            <Button onClick={() => console.log('click!')}>I am an axiom button!</Button>
        </div>
    );
}

export default App;
