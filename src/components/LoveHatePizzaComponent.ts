import { Component, BaseComponent, Intents } from '@jovotech/framework';

import { YesNoOutput } from '../output/YesNoOutput';
import { GlobalComponent } from './GlobalComponent';

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
|
| A component consists of handlers that respond to specific user requests
| Learn more here: www.jovo.tech/docs/components, jovo.tech/docs/handlers
|
*/
@Component()
export class LoveHatePizzaComponent extends BaseComponent {
  START() {
    return this.$send(YesNoOutput, { message: 'Magst Du meine Pizza probieren?' });
  }

  @Intents(['YesIntent'])
  lovesPizza() {
    this.$send({
      message: 'Bitteschön. Aber sei vorsichtig, denn das ist eine Pepperoni Pizza. ',
      listen: false,
    });
    return this.$redirect(GlobalComponent, 'INIT');
  }

  @Intents(['NotSureIntent'])
  notSurePizza() {
    this.$send({
      message: `Das ist in Ordnung. Vielleicht ein anderes mal. `,
      listen: false,
    });
    return this.$redirect(GlobalComponent, 'INIT');
  }

  @Intents(['NoIntent'])
  hatesPizza() {
    this.$send({ message: `In Ordnung, nicht jeder mag Pizza.`, listen: false });
    return this.$redirect(GlobalComponent, 'INIT');
  }

  UNHANDLED() {
    return this.$send(YesNoOutput, { message: 'Pizza problem.' });
  }
}
