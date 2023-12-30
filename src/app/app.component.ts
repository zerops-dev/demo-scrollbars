import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';

@Component({
	standalone: true,
	imports: [
		RouterOutlet,
		OverlayscrollbarsModule
	],
	selector: 'demo-scrollbars',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {

	options = {
		scrollbars: {
			theme: 'os-theme-dark'
		}
	};

}
