import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../../core/Auth-services/user.service';
import { Http } from '@angular/http';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	providers: [UserService]
})
export class LoginComponent implements OnInit {
	errorMessage: string;

	loginGroup = new FormGroup({
		username: new FormControl(),
		password: new FormControl()
	});

	constructor(private fb: FormBuilder,
		private authService: UserService,
		private snackBar: MatSnackBar,
		private router: Router
	) { }

	ngOnInit() {
		this.loginGroup = this.fb.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	login() {
		const form = this.loginGroup.value;

		if (this.loginGroup.valid) {
			const username = form.username;
			const password = form.password;
			const result = this.authService.login(username, password).subscribe(
				response => {
					if (this.authService.redirectUrl) {
						this.router.navigateByUrl(this.authService.redirectUrl);
					} else {
						console.log('It works');
						// this.router.navigate(['/main']);
					}
				},
				error => {
					console.error(error);
				});
		} else {
			this.errorMessage = 'Please enter a user name and password.';
		}
	}
}

	// this.userDataService.getUser(form.username).subscribe(
	// 	user => {
	// 	this.user = user;
	// },
	// 	err => {
	// 		this.snackBar.open('Username not found', 'Dismiss', {
	// 			duration: 3000,
	// 			verticalPosition: 'top',
	// 			horizontalPosition: 'end',
	// 		});
	// 	}
	// );

