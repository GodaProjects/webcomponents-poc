import { topHeadlinesUrl } from './newsApi.js';
import regeneratorRuntime from "regenerator-runtime";
import './news-article.js';


window.addEventListener('load', () => {
    fetchNews();
})

async function fetchNews() {
    console.log(topHeadlinesUrl)
    const res = await fetch(topHeadlinesUrl);
    const json = await res.json();

    console.log(json)

    const main = document.querySelector('main');

    json.articles.forEach(article => {
        const el = document.createElement('news-article');
        el.article = article;
        main.appendChild(el);
    });

}