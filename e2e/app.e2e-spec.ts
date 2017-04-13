import { GreenDataPage } from './app.po';

describe('green-data App', () => {
  let page: GreenDataPage;

  beforeEach(() => {
    page = new GreenDataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
