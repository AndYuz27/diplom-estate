import './App.css';
import Header from './components/Header';
import Main from './Main';
// import VideoPlug from './components/VideoPlug';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
      {/* <VideoPlug type_vidhost='rt' link="https://rutube.ru/video/181a5343d88fbaca37b8a67d9b15c306" h="720" w={1280} />
      <VideoPlug type_vidhost='yt' link="https://www.youtube.com/watch?v=Iwq_EQKKLbI" h="720" w='1280' />
      <VideoPlug type_vidhost='vk_vid' link="https://vk.com/video-223458424_456239295" h="720" w='1280' /> */}
    </div>
  );
}

export default App;


