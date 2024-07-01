import {ChangeDetectionStrategy, Component, Input, signal, } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {NgFor} from '@angular/common';
@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrl: './expansion-panel.component.css',
  standalone: true,
  imports: [MatExpansionModule, NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionPanelComponent {
  @Input() resultsData: any;
  result: any
  readonly panelOpenState = signal(false);
}