import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vehicle } from '../common/Vehicle';
import { VehicleService } from '../services/vehicle.service';
import { Subscription } from 'rxjs';
import { DoCheck } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Marker } from './Marker';


declare var H: any;

@Component({
  selector: 'here-map',
  templateUrl: './here-map.component.html',
  styleUrls: ['./here-map.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HereMapComponent implements OnInit, OnChanges  {

  @Input() markers:Marker[]=[];

  private ui: any;
  private platform: any;
  private map: any;
  private search: any;
  private group: any;
  subscription!: Subscription;

  @ViewChild("map")
  public mapElement!: ElementRef;

  @Input()
  public _apikey: any;

  @Input()
  public lat: any;

  @Input()
  public lng: any;

  @Input()
  public width: any;

  @Input()
  public height: any;

  public constructor(private service:VehicleService) { }


  ngOnChanges(): void {
    this.resetMarkers();
    this.initInfoBubble();
    this.putMarkers();
  }

  public ngOnInit() {
    this.platform = new H.service.Platform({
      "apikey": this._apikey
    });
  }

  public ngAfterViewInit() {
    let defaultLayers = this.platform.createDefaultLayers();
    this.map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.vector.normal.map,
      {
        zoom: 10,
        center: { lat: this.lat, lng: this.lng },
        pixelRatio: window.devicePixelRatio || 1
      }
    );



    // MapEvents enables the event system
    // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));

    // create default UI with layers provided by the platform
    this.ui = H.ui.UI.createDefault(this.map, defaultLayers);

    this.initInfoBubble();
    this.putMarkers();
  }

  private initInfoBubble() {
    this.group = new H.map.Group();
  
    this.map.addObject(this.group);
    var ui = this.ui;
  
    // add 'tap' event listener, that opens info bubble, to the group
    this.group.addEventListener('tap', function (evt:any) {
      // event target is the marker itself, group is a parent event target
      // for all objects that it contains
      var bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
        // read custom data
        content: evt.target.getData()
      });
      // show info bubble
      ui.addBubble(bubble);
    }, false);
  }

  public addMarker(coordinate:any, html:any,icon:string) {
    var iconobject = new H.map.Icon(icon);
    var marker = new H.map.Marker(coordinate,{icon:iconobject});
    marker.setData(html);
    this.group.addObject(marker);
  }

  public resetMarkers(){
    this.map.removeObjects(this.map.getObjects())
  }

  private putMarkers() {
    this.markers.forEach(marker => {
      this.addMarker({lat: marker.lat, lng: marker.lng},marker.data,marker.icon);
    });
  }
}