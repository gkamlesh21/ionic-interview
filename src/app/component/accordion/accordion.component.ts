import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {

  /**
   * The name of the technology that will be displayed as the title for the accordion header
   * @public
   * @property name
   * @type {string}
   */
  @Input()
  name : string = '';


  /**
   * The description of the technology that will be displayed within the accordion body (when activated 
   * by the user)
   * @public
   * @property description
   * @type {string}
   */
  @Input()
  description : string = '';

  @Input()
  number : any;


  /**
   * The official logo identifying the technology that will be displayed within the accordion body (when activated 
   * by the user)
   * @public
   * @property image
   * @type {string}
   */
  @Input()
  image : string = '';


  /**
   * The change event that will be broadcast to the parent component when the user interacts with the component's 
   * <ion-button> element
   * @public
   * @property change
   * @type {EventEmitter}
   */
  @Output()
  change : EventEmitter<string> = new EventEmitter<string>();


  /**
   * Determines and stores the accordion state (I.e. opened or closed)
   * @public
   * @property isMenuOpen
   * @type {boolean}
   */
  public isMenuOpen : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Allows the accordion state to be toggled (I.e. opened/closed)
   * @public
   * @method toggleAccordion
   * @returns {none}
   */
  public toggleAccordion() {
      this.isMenuOpen = !this.isMenuOpen;
  }


  /**
   * Allows the value for the <ion-button> element to be broadcast to the parent component
   * @public
   * @method broadcastName
   * @returns {none}
   */
  public broadcastName(name : string) {
     this.change.emit(name);
  }

}
