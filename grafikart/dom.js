const section = document.createElement("section");
const loader = document.createElement("p");
loader.innerText = "Loading...";
async function fetchData(url) {
  let data = null;
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok && response.status === 200) {
      data = await response.json();
      return data;
    } else {
      throw new Error("Not data found");
    }
  } catch (error) {
    return data;
  }
}
async function generateData() {
  toggleLoader();
  const data = await fetchData(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  toggleLoader(false);
  generateArticles(data);
}
function generateArticles(data) {
  if (data) {
    for (let d of data) {
      const article = document.createElement("article");
      const p = document.createElement("p");
      const h2 = document.createElement("h2");
      h2.innerText = d.title;
      p.innerText = d.body;
      article.append(h2, p);
      section.append(article);
    }
  } else {
    section.innerText = "No Data find";
  }
  document.getElementById("hello").append(section);
}
function toggleLoader(isLoading = true) {
  if (isLoading) {
    document.getElementById("hello").append(loader);
  } else {
    loader.remove();
  }
}
// Dans les scripts de type="module" qui est un systeme de module, le navigateur accepte le top level await
await generateData();
