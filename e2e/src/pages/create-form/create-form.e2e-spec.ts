import { browser, logging } from 'protractor';
import { CreateFormPage } from './create-form.po';

describe('Create form page', () => {
  let page: CreateFormPage;

  beforeEach(() => {
    page = new CreateFormPage();
  });

  it('should be able to add a new form element', () => {
    page.navigateTo();
    expect(page.getAllFormElements().count()).toEqual(1);

    page.clickAddElementBtn();

    const updatedFormElements = page.getAllFormElements();
    expect(updatedFormElements.count()).toEqual(2);
    const newFormElementLabel = updatedFormElements.last().$('app-editable-label input');
    expect(newFormElementLabel.getAttribute('value')).toEqual('New Field');
    // Assert that focus is automatically set on the editable label of the added element
    expect(page.getFocusedElement().equals(newFormElementLabel)).toBeTruthy();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
