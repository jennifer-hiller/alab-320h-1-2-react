import "./App.css";
import Article from "./components/Article";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  const articles = [
    {
      id: 1,
      title: "On the Street in Brooklyn",
      date: "11/12/20",
      imgSrc: "blog-image-1",
      content:
        "Cray ipsum, dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officiis magni aliquid, laborum dolor? Quasi? Veniam amet rerum ducimus est ea at neque alias. Temporibus perspiciatis at impedit vOlUdtas aut voludtates tacere totam allauid debitis rerum. ex conseguuntur. nulla elus quae corrupti optio atque ut. Repellendus molestiae doloribus recusandae, itaque voluptatibus placeat repellat deserunt amet eaque dignissimos, iste sapiente magnam doloremque. Fugit, cum, cupiditate aliquam, mollitia quisquam sed nulla eveniet doloribus neque optio odio qui! Id architecto impedit consequatur rem quaerat voluptatibus pariatur quas, quod quisquam quo ab molestiae.",
    },
    {
      id: 2,
      title: "Vintage in Vogue",
      date: "11/11/20",
      imgSrc: "blog-image-2",
      content:
        "Selfies sunt, dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officiis magni aliauid. laborum dolor? Ouasi? Veniam amet rerum ducimus est ea at neque alias Temporibus perspiciatis at impedit voluntas aut voluntates facere totam aliguid debitis rerum ey conseguintur nulla eins auge corrunti optio atque ut. Repellendus molestiae doloribus recusandae, itaque volutatibus placeat repellat deserunt amet eaque dignissimos, iste sapiente magnam doloremque. Fugit, cum, cupiditate aliquam. mollitia quisquam sed nulla eveniet doloribus neque optio odio aui! Id architecto impedit consequatur.",
    },
  ];
  return (
    <>
      <Header />
      <Nav />
      <main>
        {articles.map((article) => (
          <Article
            key={article.id}
            title={article.title}
            date={article.date}
            imgSrc={article.imgSrc}
            content={article.content}
          />
        ))}
      </main>
    </>
  );
}

export default App;
