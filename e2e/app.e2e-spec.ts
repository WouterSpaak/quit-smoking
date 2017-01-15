import { QuitSmokingPage } from './app.po';

describe('quit-smoking App', function() {
  let page: QuitSmokingPage;

  beforeEach(() => {
    page = new QuitSmokingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
