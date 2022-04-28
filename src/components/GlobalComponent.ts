import { Component, BaseComponent, Global } from '@jovotech/framework';
import { LoveHatePizzaComponent } from './LoveHatePizzaComponent';
import { LoveHateDrinkComponent } from './LoveHateDrinkComponent';
import { LoveHateIceCreamComponent } from './LoveHateIceCreamComponent';

/*
|--------------------------------------------------------------------------
| Global Component
|--------------------------------------------------------------------------
|
| The global component handlers can be reached from anywhere in the app
| Learn more here: www.jovo.tech/docs/components#global-components
|
*/
@Global()
@Component()
export class GlobalComponent extends BaseComponent {
  LAUNCH() {
    this.$send('Willkommen! ');
    return this.$redirect(GlobalComponent, 'INIT');
  }

  INIT() {
    this.$send('Hier ist eine Frage!');

    const random = Math.random();
    if (random < 0.33) {
      return this.$redirect(LoveHatePizzaComponent);
    } else if (random < 0.66) {
      return this.$redirect(LoveHateDrinkComponent);
    } else {
      return this.$redirect(LoveHateIceCreamComponent);
    }
  }
}
