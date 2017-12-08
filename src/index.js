import Tabs from './components/tabs/Tabs';

const root = document.getElementById('root');
const template = `<div><h1>Accessible Tabs</h1>
        <h2>Tabs #1 - orientation missing</h2>

        <section class="tabs">
            <div role="tablist" data-delay="200">
                <button type="button" role="tab"
                    aria-selected="true"
                    aria-controls="panel1"
                    id="tab1"
                    tabindex="0">
                    Tab 1
                </button>
                <button type="button" role="tab"
                    aria-selected="false"
                    aria-controls="panel2"
                    id="tab2"
                    tabindex="-1">
                    Tab 2
                </button>
                <button type="button" role="tab"
                    aria-selected="false"
                    aria-controls="panel3"
                    id="tab3"
                    tabindex="-1"
                    data-deletable="">
                    Tab 3
                </button>
            </div>
            <div class="panel-wrapper">
            <div tabindex="0"
                role="tabpanel"
                id="panel1"
                aria-labelledby="tab1"
                aria-expanded="true">
                <p>
                    <a href="#">Nils Frahm</a> is a German musician, composer and record producer based in Berlin. He is known for combining classical and electronic music and for an unconventional approach to the piano in which he mixes a grand piano, upright piano, Roland Juno-60, Rhodes piano, drum machine, and Moog Taurus.
                </p>
            </div>
            <div tabindex="0"
                role="tabpanel"
                id="panel2"
                aria-labelledby="tab2"
                aria-expanded="false"
                hidden="">
                <p>
                    Agnes Caroline Thaarup Obel is a Danish singer/songwriter. Her first album, Philharmonics, was released by <a href="#">PIAS Recordings</a> on 4 October 2010 in Europe. Philharmonics was certified gold in June 2011 by the <a href="#">Belgian Entertainment Association (BEA)</a> for sales of 10,000 Copies.
                </p>
                <form action="#">
                  <p>
                    <label for="firstname">First name</label>
                    <input type="text" id="firstname" />
                  </p>
                  <p>
                    <label for="lastname">First name</label>
                    <input type="text" id="lastname" />
                  </p>
                  
                  <button tabindex="0">Send</button>
                </form>
            </div>
            <div tabindex="0"
                role="tabpanel"
                id="panel3"
                aria-labelledby="tab3"
                aria-expanded="false"
                hidden="">
                <p>
                    Fear of complicated buildings:
                </p>
                <p>
                    A complex complex complex.
                </p>
            </div>
            </div>
        </section>
        <div>
            <p>Lorum ipsum <a href="#">link to somewhere</a>sit dolar</p>
            <p>Agnes Caroline Thaarup Obel is a Danish singer/songwriter. Her first album, Philharmonics, was released by <a href="#">PIAS Recordings</a> on 4 October 2010 in Europe. Philharmonics was certified gold in June 2011 by the <a href="#">Belgian Entertainment Association (BEA)</a> for sales of 10,000 Copies.</p>
            <p>Agnes Caroline Thaarup Obel is a Danish singer/songwriter. Her first album, Philharmonics, was released by <a href="#">PIAS Recordings</a> on 4 October 2010 in Europe. Philharmonics was certified gold in June 2011 by the <a href="#">Belgian Entertainment Association (BEA)</a> for sales of 10,000 Copies.</p>
        </div>
        <h2>Tabs #2 - orientation vertical</h2>

        <section class="tabs">
            <div role="tablist"
                aria-orientation="vertical"
                class="bottom-tabs">
                <button role="tab"
                    aria-selected="true"
                    aria-controls="nils-tab2"
                    id="nils2">
                    Nils Frahm
                </button>
                <button role="tab"
                    aria-selected="false"
                    aria-controls="agnes-tab2"
                    id="agnes2"
                    tabindex="-1">
                    Agnes Obel
                </button>
                <button role="tab"
                    aria-selected="false"
                    aria-controls="complexcomplex2"
                    id="complex2"
                    tabindex="-1"
                    data-deletable="">
                    Joke
                </button>
            </div>
            <div class="panel-wrapper">
            <div tabindex="0"
                role="tabpanel"
                id="nils-tab2"
                aria-labelledby="nils2"
                aria-expanded="true">
                <p>
                    <a href="#" tabindex="0">Nils Frahm</a> is a German musician, composer and record producer based in Berlin. He is known for combining classical and electronic music and for an unconventional approach to the piano in which he mixes a grand piano, upright piano, Roland Juno-60, Rhodes piano, drum machine, and Moog Taurus.
                </p>
            </div>
            <div tabindex="0"
                role="tabpanel"
                id="agnes-tab2"
                aria-labelledby="agnes2"
                aria-expanded="false"
                hidden="">
                <p>
                    Agnes Caroline Thaarup Obel is a Danish singer/songwriter. Her first album, Philharmonics, was released by <a href="#">PIAS Recordings</a> on 4 October 2010 in Europe. Philharmonics was certified gold in June 2011 by the <a href="#">Belgian Entertainment Association (BEA)</a> for sales of 10,000 Copies.
                </p>
            </div>
            <div tabindex="0"
                role="tabpanel"
                id="complexcomplex2"
                aria-labelledby="complex2"
                aria-expanded="false"
                hidden="">
                <p>
                    Fear of complicated buildings:
                </p>
                <p>
                    A complex complex complex.
                </p>
            </div>
            </div>
        </section>
        <p>Agnes Caroline Thaarup Obel is a Danish singer/songwriter. Her first album, Philharmonics, was released by <a href="#">PIAS Recordings</a> on 4 October 2010 in Europe. Philharmonics was certified gold in June 2011 by the <a href="#">Belgian Entertainment Association (BEA)</a> for sales of 10,000 Copies.</p></div>`.trim();


  root.innerHTML = template;

  const init = (() => {
    const tabSections = Array.from(document.querySelectorAll('section.tabs'));

    tabSections.forEach((tabSection) => {
    return new Tabs(tabSection);
    });
  })();
