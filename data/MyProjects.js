import Tontonanku from "../assets/img/tontonanku.png"
import MovieFinder from "../assets/img/MovieFinder.png"
import AIRITSTORE from "../assets/img/airitstore.png"
import MyAnimeList from "../assets/img/myanimelist-clone.png"

export const projects = [
    {
        img: require("assets/img/kramatmotor.png"),
        title: 'kramatmotor.com',
        path: 'https://kramatmotor.com',
        source: 'https://kramatmotor.com',
        description: 'Company Profiles for PT Kramat Motor',
        stack: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP"],
    },
    {
        img: require("assets/img/tokorackserver.png"),
        title: 'tokorackserver.com',
        path: 'https://tokorackserver.com',
        source: 'https://tokorackserver.com',
        description: 'E-Commerce Website for PT Trikomindo Karunia Utama',
        stack: ['WORDPRESS', 'PHP', 'BOOTSTRAP', 'WOOCOMMERCE'],
    },
    {
        img: require("assets/img/airitservice.png"),
        title: 'airitservice.web.id',
        path: 'https://airitservice.web.id/',
        source: 'https://airitservice.web.id/',
        description: 'Landing page for AIR IT Service',
        stack: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP"],
    },
    {
        img: AIRITSTORE,
        title: 'AIR IT STORE',
        path: 'https://store.airitservice.web.id/',
        source: 'https://github.com/airitservice/store.airit-service.com',
        description: 'Ecommerce Website selling Computer & Laptop Accessories built with Jamstack',
        stack: ["React.js", "Gatsby.js", "Contentful", "Netlify Forms"],
    },
]
export const portfolio = [
    {
        img: Tontonanku,
        title: 'TontonanKu -  Movie/Series Watch List App',
        path: 'https://ttnku.netlify.app',
        source: 'https://github.com/Baja-Softworks/TontonanKu',
        description: 'Simple CRUD for track your watch-list, so you can remember the latest episode!',
        stack: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP", "localStorage"],
    },
    {
        img: MovieFinder,
        title: 'Movie Finder - Find Movies Information',
        path: 'https://mv-finder.netlify.app',
        source: 'https://github.com/B4Lee/movie-finder',
        description: 'An API Connected Website - API Provided by The Movie Database | Made for learning Fetch API using Vue.js and Axios',
        stack: ['Javascript', 'Axios', 'Vue.js', 'Tailwind'],
    },
    {
        img: MyAnimeList,
        title: 'MyAnimeList.net Clones - Anime & Manga Watchlist!',
        path: 'https://myanimelist-clone.netlify.app/',
        source: 'https://github.com/B4Lee/myanimelist-clone',
        description: 'An API Connected Website - API Provided by Jikan.moe | Made For Learning Vue.js Composable API and Supabase Authentication',
        stack: ["Vue.js", "TailwindCSS", "Pinia", "Supabase"],
    },

]