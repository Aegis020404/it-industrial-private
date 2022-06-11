import './../style/main.css';
import './../style/swiper.css';
import './../style/acc.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './../style/normalize.css'
import {wrapper} from './../redux/store';

function App ({Component, pageProps}) {
    return <Component {...pageProps}/>
}

export default wrapper.withRedux(App)