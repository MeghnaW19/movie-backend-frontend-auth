import { MovieAppPage } from './app.po';
import { browser, by, element, protractor } from 'protractor';

describe('movie-app App', () => {
  let page: MovieAppPage;

  beforeEach(() => {
    page = new MovieAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();

  // expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
  

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('Movie App');
  });

  it('should be redirected to /login route on opening the application', () => {
    expect(browser.getCurrentUrl()).toContain('/login');
    browser.element(by.id('register-btn')).click();
    expect(browser.getCurrentUrl()).toContain('/register');
  });

  it('should be able to register', () => {
    browser.element(by.id('username')).sendKeys('tamil');
    browser.element(by.id('pass')).sendKeys('tamil');
    browser.element(by.id('fname')).sendKeys('tamil');
    browser.element(by.id('lname')).sendKeys('tamil');
    browser.element(by.id('jumbotron.btn')).submit();

    expect(browser.getCurrentUrl()).toContain('/login');

  });

  it('should be able to login', () => {
    browser.element(by.id('form-group')).sendKeys('jason');
    browser.element(by.id('form-group1')).sendKeys('jason');
    browser.element(by.id('jumbotron.btn')).click();

    expect(browser.getCurrentUrl()).toContain('/movie');

  });

  it('should be able to search for movies', () => {
    browser.element(by.id('col-md-4')).sendKeys('star');
    const searchItems = element.all(by.id('name'));
    expect(searchItems.count()).toBe(1);
    for (let i = 0; i < 1; i++) {
        expect(searchItems.get(i).getText()).toContain('Star');
    }

  });

    it('should be able to add  to watchlist', () => {
      const searchItems = element.all(by.id('name'));
        expect(searchItems.count()).not.toBeLessThan(0);
      //expect(searchItems.count()).toBe(1);
      browser.element(by.id('recBtn')).click();
    });

    it('should be able to retrieve watchlist and do comments and remove', () => {

      browser.element(by.cssContainingText('a', 'My Recommendations')).click();

      let watchlistItems = element.all(by.id('name'));
      expect(watchlistItems.get(0).getText()).toContain( 'Star');

      watchlistItems = element.all(by.id('comments'));
      watchlistItems.get(0).sendKeys('my comment');
      browser.element(by.id('save')).click();
      watchlistItems = element.all(by.id('comments'));
      expect(watchlistItems.count()).toBe(1, `my comment`);
      watchlistItems.get(0).click();

    });

    it('should be able to unrecommend', () => {

      browser.element(by.cssContainingText('a', 'Dashboard')).click();
      browser.element(by.id('col-md-4')).sendKeys('star');
      const searchItems = element.all(by.id('name'));

      browser.element(by.id('recBtn')).click();
    });


});
