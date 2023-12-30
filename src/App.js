import { Download, Features, SectionWrapper } from './components';
import assets from './assets';

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start Selling & Growing"
        description="Buy, store, collect NFTs, exchange & earn crypto. Join 35+ million people using ProNef Marketplace."

        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
    </>
  );
}

export default App;
