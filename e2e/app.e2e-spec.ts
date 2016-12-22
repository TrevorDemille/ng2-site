import { Ng2SitePage } from './app.po';

describe('ng2-site App', function() {
  let page: Ng2SitePage;

  beforeEach(() => {
    page = new Ng2SitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
