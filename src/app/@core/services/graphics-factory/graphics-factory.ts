import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventType, GAME_HEIGHT, GAME_WIDTH } from '../../constants';
import {
  AiFollowControls,
  AiFollowShooterControls,
  AiRandomControls,
  AiRandomShooterControls,
  PlayerControls,
  ControlFactory,
  AiControl,
} from '../../controls';
import { Background, Explosion, Projectile, Ship } from '../../models';
import { ControlledGraphics } from '../../models/controlled-graphics';
import { Random } from '../../utils';
import { Loader } from '../loader';
import { Score } from '../score';

@Injectable()
export class GraphicsFactory {
  private readonly seed: number;

  private readonly random: Random;

  constructor(
    private readonly loader: Loader,
    private readonly score: Score,
    private readonly activatedRoute: ActivatedRoute
  ) {
    this.seed = this.activatedRoute.snapshot.params['seed'];
    this.random = new Random(this.seed);
  }

  public getBackground(): Background {
    const background = new Background(
      this.random.nextInt(),
      this.loader.get('bg_far'),
      this.loader.get('bg_mid'),
      this.loader.get('bg_near')
    );
    const update = background.update;
    background.update = (delta) =>
      update.call(background, delta * (this.score.level + 1));
    return background;
  }

  public getPlayer(): ControlledGraphics<PlayerControls> {
    const options = {
      speed: 5,
      angularSpeed: 0.1,
      scale: 1,
      boundingRadius: 20,
    };
    return new ControlledGraphics(
      this,
      new Ship(this.loader.get('ship')),
      options,
      ControlFactory(PlayerControls)
    );
  }

  public getEnemy(
    type: EventType,
    candidates: Array<ControlledGraphics<any>>
  ): ControlledGraphics<AiControl> {
    let control: (target: any) => AiControl;
    switch (type) {
      case EventType.ADD_RANDOM_SHOOTER_SHIP: {
        control = ControlFactory(
          AiRandomShooterControls,
          this.random.nextInt()
        );
        break;
      }
      case EventType.ADD_FOLLOW_KAMIKAZE_SHIP: {
        control = ControlFactory(
          AiFollowControls,
          candidates,
          this.random.nextInt()
        );
        break;
      }
      case EventType.ADD_FOLLOW_SHOOTER_SHIP: {
        control = ControlFactory(
          AiFollowShooterControls,
          candidates,
          this.random.nextInt()
        );
        break;
      }
      default: {
        control = ControlFactory(AiRandomControls, this.random.nextInt());
        break;
      }
    }
    const options = {
      speed: 3,
      angularSpeed: 0.05,
      scale: 1,
      boundingRadius: 20,
      tint: this.random.next() * 0xffffff,
    };

    const enemy = new ControlledGraphics(
      this,
      new Ship(this.loader.get('ship')),
      options,
      control
    );

    enemy.position.set(
      (GAME_WIDTH * 9) / 8,
      GAME_HEIGHT / 4 + (GAME_HEIGHT / 2) * this.random.next()
    );
    enemy.rotation = Math.PI;
    enemy.onRemove.add(() => this.score.add());

    return enemy;
  }

  public getExplosion(x: number, y: number): Explosion {
    return new Explosion(this.loader.getAnimation('explosion'), x, y);
  }

  public getProjectile(owner: ControlledGraphics<any>): Projectile {
    const options = {
      speed: 15,
      boundingRadius: 10,
    };
    return new Projectile(this, owner, options, this.loader.get('trail'));
  }
}
