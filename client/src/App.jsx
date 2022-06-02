import { useState, useEffect } from "react";
import { FaTumblrSquare, FaTwitterSquare, FaQuoteLeft } from "react-icons/fa";
import axios from "axios";
function App() {
  const [text, setText] = useState(null);
  const [author, setAuthor] = useState(null);
  const [bgColor, setbgColor] = useState("bg-yellow-500 text-yellow-500");
  const [textColor, settextColor] = useState("bg-yellow-500 text-yellow-500");

  const colorObject = {
    colors: [
      {
        name: "bg-yellow-500 text-yellow-500",
      },
      {
        name: "bg-slate-500 text-slate-500",
      },
      {
        name: "bg-red-500 text-red-500",
      },
      {
        name: "bg-orange-500 text-orange-500",
      },
      {
        name: "bg-blue-500 text-blue-500",
      },
      {
        name: "bg-amber-500 text-amber-500",
      },
      {
        name: "bg-green-500 text-green-500",
      },
      {
        name: "bg-sky-500 text-sky-500",
      },
      {
        name: "bg-indigo-500 text-indigo-500",
      },
      {
        name: "bg-rose-500 text-rose-500",
      },
    ],
  };
  const getData = () => {
    const num = Math.floor(Math.random() * 10);
    axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then((res) => {
        setText(res.data.quotes[num].quote);
        setAuthor(res.data.quotes[num].author);
        setbgColor(colorObject.colors[num].name.split(" ")[0]);
        settextColor(colorObject.colors[num].name.split(" ")[1]);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={`h-screen grid place-content-center ${textColor} ${bgColor} `}>
      <div id="quote-box" className=" flex flex-col bg-white p-10 gap-5">
        <section className="flex items-start gap-2">
          <FaQuoteLeft className=" text-2xl"></FaQuoteLeft>
          <div id="text" className=" text-3xl max-w-2xl text-yellow-500">
            {" "}
            {text}
          </div>
        </section>

        <div id="author" className=" text-right">
          - {author}
        </div>

        <section className="flex justify-between">
          <figure className="flex gap-1">
            <a id="tweet-quote" href="https://twitter.com/intent/tweet">
              <FaTwitterSquare className=" text-4xl" />
            </a>
          </figure>
          <button
            id="new-quote"
            className={`btn btn-sm text-white ${bgColor} `}
            onClick={(x) => getData()}
          >
            New Quote
          </button>
        </section>
      </div>
    </div>
  );
}

export default App;
