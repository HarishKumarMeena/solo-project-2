import Header from "./components/Header";
import Card from "./components/Cards";
import data from "./data";
import "./App.css";

export default function App() {

  const cards = data.map((item) => {
    return (
      <Card 
        key = {item.id}
        {...item}
        />
    )
  })

  return (
    <div>
      <Header />
      <section>
        {cards}
      </section>
    </div>
  )
}