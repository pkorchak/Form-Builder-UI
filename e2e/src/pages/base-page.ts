import { by, element } from 'protractor';
import { ElementFinder } from 'protractor/built/element';

export abstract class BasePage {
  abstract navigateTo(): Promise<any>;

  getFocusedElement(): ElementFinder {
    return element(by.css(':focus'));
  }
}
