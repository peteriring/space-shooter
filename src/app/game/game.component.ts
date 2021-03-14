import {
  Container,
  autoDetectRenderer,
  Renderer,
  Ticker,
  DisplayObject,
  IPoint,
} from 'pixi.js';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { GAME_HEIGHT, GAME_WIDTH } from 'src/app/@core/constants';
import { ActivatedRoute, Router } from '@angular/router';
import { Random } from 'src/app/@core/utils';
import { PlayerControls } from 'src/app/@core/controls';
import { Orchestrator, Score, Loader } from 'src/app/@core/services';
import { GraphicsFactory } from '../@core/services/graphics-factory';
import { ControlledGraphics } from '../@core/models/controlled-graphics';
import { DynamicGraphics } from '../@core/models/dynamic-graphics';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GameoverModal } from '../@core/components';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: [Orchestrator, Score, GraphicsFactory],
})
export class GameComponent extends Container implements OnInit, OnDestroy {
  @ViewChild('canvas', { read: ElementRef, static: true })
  public readonly canvas: ElementRef<HTMLCanvasElement>;

  public readonly clock = new Ticker();

  public readonly seed: number;

  public readonly random: Random;

  public readonly sortableChildren: boolean = true;

  public renderer: Renderer;

  public player: ControlledGraphics<PlayerControls>;

  constructor(
    public readonly score: Score,
    private readonly loader: Loader,
    private readonly orchestrator: Orchestrator,
    private readonly factory: GraphicsFactory,
    private readonly modalService: NgbModal,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {
    super();
    this.seed = this.activatedRoute.snapshot.params['seed'];
    this.random = new Random(this.seed);
  }

  public ngOnInit(): void {
    this.renderer = autoDetectRenderer({
      backgroundColor: 0x1099bb,
      width: GAME_WIDTH,
      height: GAME_HEIGHT,
      view: this.canvas.nativeElement,
    }) as Renderer;

    this.loader.onComplete.add(() => this.initialize());
  }

  public ngOnDestroy(): void {
    this.children
      .filter((child) => child instanceof DynamicGraphics)
      .forEach((child: DynamicGraphics) => child.cleanup());
    this.clock.destroy();
  }

  public initialize(): void {
    this.player = this.addChild(this.factory.getPlayer());
    this.addChild(this.factory.getBackground());
    this.player.onRemove.add(() => this.gameover());
    this.clock.add((delta) => this.update(delta));
    this.clock.add(() => this.orchestrator.update(this));
    this.clock.start();
  }

  public update(delta: number) {
    const mouse: IPoint = this.renderer.plugins.interaction.mouse.global;
    const removeSet = new Set<DisplayObject>();
    const entries: Array<DynamicGraphics> = this.children.filter(
      (child) => child instanceof DynamicGraphics
    ) as Array<DynamicGraphics>;
    for (let i = 0, length = entries.length; i < length; ++i) {
      const child01 = entries[i];
      if (child01.isOutOfBounds()) removeSet.add(child01);
      else {
        for (let j = i + 1, length = entries.length; j < length; ++j) {
          const child02 = entries[j];
          if (child01.hitTest(child02)) {
            removeSet.add(child01);
            removeSet.add(child02);
          }
        }
      }
    }

    removeSet.forEach((child) => this.removeChild(child));
    this.children.forEach((child: any) => child.update(delta, mouse));
    this.renderer.render(this);
  }

  public removeChild<T extends DisplayObject[]>(...children: T): T[0] {
    children
      .filter((child) => child instanceof DynamicGraphics)
      .forEach((child: DynamicGraphics) => child.cleanup());
    return super.removeChild(...children);
  }

  public gameover(): void {
    this.score.freeze();
    const modalRef = this.modalService.open(GameoverModal, {
      size: 'sm',
      centered: true,
      backdrop: 'static',
      keyboard: false,
    });
    modalRef.componentInstance.isHighest = this.score.isHighest;
    modalRef.componentInstance.score = this.score.score;
    modalRef.result.then(() => {
      this.router.navigate(['menu']);
    });
  }
}
