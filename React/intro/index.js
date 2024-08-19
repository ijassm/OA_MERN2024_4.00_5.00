const data = [
  {
    title: "Title1",
    description:
      "React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.",
  },
  {
    title: "Title2",
    description:
      "JavaScript is a versatile programming language that allows you to create dynamic and interactive content on web pages. It can be used for both client-side and server-side development.",
  },
  {
    title: "Title3",
    description:
      "Node.js is a runtime environment that allows you to run JavaScript on the server side. It is built on Chrome's V8 JavaScript engine and is ideal for building scalable network applications.",
  },
  {
    title: "Title4",
    description:
      "MongoDB is a NoSQL database that stores data in JSON-like documents. It is designed for scalability and flexibility, making it a popular choice for modern web applications.",
  },
  {
    title: "Title5",
    description:
      "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building single and multi-page web applications.",
  },
];

const doc = document;

data.map((obj) => {
  const card = doc.createElement("main");
  const title = doc.createElement("h1");

  if (obj.title.toLowerCase() === "title5") {
    title.style.color = "blue";
  }
  title.textContent = obj.title;
  const description = doc.createElement("p");
  description.textContent = obj.description;
  card.append(title, description);
  doc.body.appendChild(card);
});
