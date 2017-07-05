import { FormulaPage } from './app.po';

describe('formula App', () => {
  let page: FormulaPage;

  beforeEach(() => {
    page = new FormulaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
