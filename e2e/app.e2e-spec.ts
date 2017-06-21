import { AngularToDoAppPage } from './app.po';

describe('angular-to-do-app App', () => {
  let page: AngularToDoAppPage;

  beforeEach(() => {
    page = new AngularToDoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
