import { browser, by, element } from 'protractor';
import { ElementArrayFinder } from 'protractor/built/element';
import { BasePage } from '../base-page';

export class CreateFormPage extends BasePage {
  navigateTo(): Promise<any> {
    return browser.get(browser.baseUrl + '/create') as Promise<any>;
  }

  clickAddElementBtn(): Promise<any> {
    return element(by.css('.add-element-btn')).click() as Promise<any>;
  }

  getAllFormElements(): ElementArrayFinder {
    return element.all(by.css('app-editable-form-element'));
  }
}
