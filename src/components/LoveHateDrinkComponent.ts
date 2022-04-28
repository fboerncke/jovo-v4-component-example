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
export class LoveHateDrinkComponent extends BaseComponent {
  START() {
    return this.$send(YesNoOutput, { message: 'Magst Du einen Drink probieren?' });
  }

  @Intents(['YesIntent'])
  lovesDrink() {
    this.$send({
      message: 'Bitteschön. Aber sei vorsichtig, wenn Du später noch Auto fahren musst. ',
      listen: false,
    });
    return this.$redirect(GlobalComponent, 'INIT');
  }

  @Intents(['NotSureIntent'])
  notSureDrink() {
    this.$send({
      message: `Das ist in Ordnung. Vielleicht ein Mineralwasser? `,
      listen: false,
    });
    return this.$redirect(GlobalComponent, 'INIT');
  }

  @Intents(['NoIntent'])
  hatesDrink() {
    this.$send({ message: `In Ordnung, nicht jeder mag was trinken.`, listen: false });
    return this.$redirect(GlobalComponent, 'INIT');
  }

  UNHANDLED() {
    return this.$send(YesNoOutput, { message: 'Drink problem.' });
  }
}
