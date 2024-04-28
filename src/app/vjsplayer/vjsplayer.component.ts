import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgApiService, VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';

@Component({
  selector: 'app-vjsplayer',
  standalone: true,
  imports: [
    CommonModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  templateUrl: './vjsplayer.component.html',
  styleUrl: './vjsplayer.component.scss'
})
export class VJSPlayerComponent {
  preload: string = 'auto'
  api: VgApiService = new VgApiService;

  @Input() options: { src: string, poster: string } = { src: '', poster: '' };
  
  // ADD -> (onPlayerReady)="onPlayerReady($event)"
  // IN <vg-player *HERE*> for autoplay
  onPlayerReady(source: VgApiService) {
    this.api = source;
    // console.log("onPlayerReady");
    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(
      this.autoplay.bind(this)
    )
  }

  autoplay() {
    // console.log("play");
    this.api.play();
  }
}