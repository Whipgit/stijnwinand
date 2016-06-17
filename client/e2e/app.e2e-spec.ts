import { StijnwinandPage } from './app.po';

describe('stijnwinand App', function() {
  let page: StijnwinandPage;

  beforeEach(() => {
    page = new StijnwinandPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
