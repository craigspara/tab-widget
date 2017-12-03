import {expect} from 'chai';
import Tabs from '../../src/components/tabs/Tabs';
import sinon from 'sinon';
const jsdom = require("jsdom");


const mockData = `<section class=\"tabs\" aria-labelledby=\"tabs1\"><div role=\"tablist\" data-delay=\"1000\" aria-orientation="vertical"><button type =\"button\" role=\"tab\" aria-selected=\"true\" aria-controls=\"nils-tab\" id=\"nils\">Tab 1</button><button type=\"button\" role=\"tab\" aria-selected=\"false\"  id=\"agnes\" tabindex=\"-1\">Tab 2</button><button type=\"button\" role=\"tab\" aria-selected=\"false\" aria-controls=\"complexcomplex\" id=\"complex\" tabindex=\"-1\" data-deletable=\"\">Tab 3</button></div><div tabindex=\"0\" role=\"tabpanel\" id=\"nils-tab\" aria-labelledby=\"nils\" aria-expanded=\"true\"><p><a href=\"#\">Nils Frahm</a> is a German musician, composer and record producer based in Berlin. He is known for combining classical and electronic music and for an unconventional approach to the piano in which he mixes a grand piano, upright piano, Roland Juno-60, Rhodes piano, drum machine, and Moog Taurus.</p></div><div tabindex=\"0\" role=\"tabpanel\" id=\"agnes-tab\" aria-labelledby=\"agnes\" aria-expanded=\"false\" hidden =\"\"><p>Agnes Caroline Thaarup Obel is aDanish singer/songwriter.Her first album, Philharmonics, was released by <a href=\"#\">PIAS Recordings</a> on 4 October 2010 in Europe. Philharmonics was certified gold in June 2011 by the <a href=\"#\">Belgian Entertainment Association (BEA)</a> for sales of 10,000 Copies.</p></div><div tabindex=\"0\" role=\"tabpanel\" id=\"complexcomplex\" aria-labelledby=\"complex\" aria-expanded=\"false\" hidden=\"\"><p>Fear of complicated buildings:</p><p>A complex complex complex.</p></div></section>`;

const { JSDOM } = jsdom;
const dom = new JSDOM(mockData);

describe('Tabs', function () {

  // set-up
  const tabSection = dom.window.document.querySelectorAll('section[aria-labelledby]');
  const tabs = new Tabs(tabSection[0]);

  describe('Tabs properties', function () {

    // set-up
    const tabList = tabs.tabs;
    const panelList = tabs.panels;

    it('should be an instance of Tabs', function () {
      expect(tabs instanceof Tabs).to.be.true;
    });
    it('Should receive a non-empty object', function () {
      expect(tabs).to.not.be.undefined;
      expect(tabs).to.be.an('object');
      expect(tabs).to.not.be.empty;
    });
    it('should contain one or more tabs', function () {
      expect(tabList.length).to.be.greaterThan(0);
    });
    it('should contain one or more panels', function () {
      expect(panelList.length).to.be.greaterThan(0);
    });
    it('should contain the same number of tabs and panels', function () {
      expect(tabList.length === panelList.length).to.be.true;
    });

    describe('orientation property', function () {
      context('when present', function () {
        //set-up
        const orientation = tabs.orientation;

        it('should have an orientation property that is a string', function () {
          expect(orientation).to.not.be.undefined;
          expect(orientation).to.be.a('string');
        });
        it('should have a value which is either "horizontal" or "vertical', function () {
          expect(orientation === 'horizontal' || orientation === 'vertical').to.be.true;
        });
      });

      context('when not present', function () {
        // Set-up: remove orientation attribute from DOM and initialize a new Tab instance
        const revisedTabSection = tabSection[0];
        revisedTabSection.querySelector('[role="tablist"]').removeAttribute('aria-orientation');
        const testTabs = new Tabs(revisedTabSection);
        const orientation = testTabs.orientation;

        it('should have an orientation property that is a string', function () {
          expect(orientation).to.not.be.undefined;
          expect(orientation).to.be.a('string');
        });
        it('should have use the default value: "horizontal"', function () {
          expect(orientation).to.be.equal('horizontal');
        });
      })
    });

    describe('delay property', function () {
      context('when present', function () {
        //set-up
        const delay = tabs.delay;

        it('should have a delay property that is a number', function () {
          expect(delay).to.not.be.undefined;
          expect(Number.isNaN(delay)).to.be.false;
        });
        it('should be a positive number', function () {
          expect(delay >= 0).to.be.true;
        });

        it('should be a safe integer', function () {
          expect(Number.isSafeInteger(delay)).to.be.true;
        });
      });

      context('when not present', function () {
        // Set-up: remove orientation attribute from DOM and initialize a new Tab instance
        const revisedTabSection = tabSection[0];
        revisedTabSection.querySelector('[role="tablist"]').removeAttribute('data-delay');
        const testTabs = new Tabs(revisedTabSection);
        const delay = testTabs.delay;

        it('should have a delay property that is a number', function () {
          expect(delay).to.not.be.undefined;
          expect(Number.isNaN(delay)).to.be.false;
        });
        it('should be a positive number', function () {
          expect(delay >= 0).to.be.true;
        });

        it('should be a safe integer', function () {
          expect(Number.isSafeInteger(delay)).to.be.true;
        });
        it('should have use the default value: "horizontal"', function () {
          expect(delay).to.be.equal(300);
        });
      })
    });
  });
  describe.only('Tabs methods', function () {
    const tab = tabs.tabs;
    const panel = tabs.panels;
    let activeTab = tabs.tabs[1];
    const event = {
      currentTarget: null,
      relatedTarget: null,
      shiftKey: false,
      srcElement: 'button#agnes',
      target: 'button#agnes',
      toElement: 'button#agnes',
      type: 'click'
    };
    // const mock = sinon.mock(tabs);

    // const activeTabTestFunction = sinon.spy(tabs, 'activateTab');
    // const activePanelTestFunction = sinon.spy(tabs, 'activatePanel');
    // const spy = sinon.spy(tabs, 'activatePanel');
    const stub = sinon.stub(tabs);

   console.info('this _______________________');
    // console.info(this);

    // console.info(this.panels);
    // console.info(Object.keys(mock.expects('activateTab')));
    // console.info(mock.expects('activateTab').callCount);
    // console.info(activeTabTestFunction);
    // console.info(activePanelTestFunction);
    afterEach(function() {
      // tabs.activatePanel.restore();
    });
    describe('activateTab()', function () {
      // set up
      it('should be passed one parameter');
      it('should receive the activeTab object tab as a parameter');
      it('should call the "activatePanel" function', function() {
        tabs.clickEventListener(event);

        // console.info(activeTabTestFunction(activeTab));
        // const expectation = mock.expects('activatePanel').once().withArgs(event.target);
        // expectation.verify();
        // expect(stub.clickEventListener).to.be.called;
      });

      context('when the activeTab matches the tab being iterated over', function () {
        it('should remove the "tabindex" attribute');
        it('should set the "aria-selected" attribute to "true"');
      });
      context('when the activeTab does not match the tab being iterated over', function () {
        it('should add the "tabindex" attribute and set the value to "-1"');
        it('should set the "aria-selected" attribute to "false"');
      });
    });

    describe('activatePanel()', function () {
      it('should be passed one parameter');
      context('when activeTab["aria-controls"] matches the panel.id', function () {
        it('should remove the "hidden" attribute');
        it('should set the "aria-expanded" attribute to "true"');
      });
      context('when activeTab["aria-controls"] does not match the panel.id', function () {
        it('should add the "hidden" attribute and set the value to "hidden"');
        it('should set the "aria-expanded" attribute to "false"');
      });
    });
  });
});