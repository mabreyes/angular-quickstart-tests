import { DevTestPage } from './app.po';

describe('dev-test App', () => {
  let page: DevTestPage;

  beforeEach(() => {
    page = new DevTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
