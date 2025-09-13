import './App.css';

const link = {
  url: "https://goiteens.com/",
  text: "GoITeens"
}

const photoUrl = "https://school.goiteens.com/app/uploads/2025/04/favicon-300x300-1.png";

const x = 5;
const y = 10;
const z = x + y;

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src={photoUrl} alt="Placeholder" />
      <a href={link.url}>{link.text}</a>
      <p>{x} + {y} = {z}</p>
            <ul>
{
        colors.map((color) => {
        return <li>{color}</li>
})  
}
      </ul>
    </div>
  );
}

export default App;
