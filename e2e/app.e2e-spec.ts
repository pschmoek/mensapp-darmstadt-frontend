import { MensappDarmstadtFrontendPage } from './app.po';

describe('mensapp-darmstadt-frontend App', () => {
  let page: MensappDarmstadtFrontendPage;

  beforeEach(() => {
    page = new MensappDarmstadtFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
