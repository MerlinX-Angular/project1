import { AngularShopping1Page } from './app.po';

describe('angular-shopping1 App', () => {
  let page: AngularShopping1Page;

  beforeEach(() => {
    page = new AngularShopping1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
