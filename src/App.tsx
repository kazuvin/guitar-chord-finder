import "./App.css";
import Fretboard from "./components/fretboard";

function App() {
  return (
    <main className="mx-auto flex min-h-screen flex-1 flex-col items-center justify-center gap-8">
      <Fretboard displayMode="DIGREE" tuning="REGULAR" />
    </main>
  );
}

export default App;
