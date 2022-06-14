import '../components/style/main.css';
import '../components/style/swiper.css';
import '../components/style/acc.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../components/style/normalize.css'
import {wrapper} from '../redux/store';

function App ({Component, pageProps}) {
    return <Component {...pageProps}/>
}

export default wrapper.withRedux(App)