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
export class LoveHateIceCreamComponent extends BaseComponent {
  START() {
    return this.$send(YesNoOutput, { message: 'Magst Du ein Eis probieren?' });
  }

  @Intents(['YesIntent'])
  lovesIceCream() {
    this.$send({ message: 'Gerne. Hier ist ein Tuttifrutti-Eis. ', listen: false });
    return this.$redirect(GlobalComponent, 'INIT');
  }

  @Intents(['NotSureIntent'])
  notSureIceCream() {
    this.$send({ message: `Muss ja nicht sein. Vielleicht später. `, listen: false });
    return this.$redirect(GlobalComponent, 'INIT');
  }

  @Intents(['NoIntent'])
  hatesIceCream() {
    this.$send({ message: `Kein Thema. So kannst Du Kalorien sparen.`, listen: false });
    return this.$redirect(GlobalComponent, 'INIT');
  }

  UNHANDLED() {
    return this.$send(YesNoOutput, { message: 'Ice cream problem.' });
  }
}
