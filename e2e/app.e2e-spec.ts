import { LoianeAulasPage } from './app.po';

describe('loiane-aulas App', function() {
  let page: LoianeAulasPage;

  beforeEach(() => {
    page = new LoianeAulasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
