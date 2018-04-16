import { Component, OnInit } from '@angular/core';
import { Order } from '../../../../core/entities/order';
import { Customer } from '../../../../core/entities/customer';
import { Report } from '../../../../core/entities/report';

import { OrdersDataService } from '../../../../core/data-services/orders-data.service';
import { CustomerDataService } from '../../../../core/data-services/customer-data.service';
import { ReportDataService } from '../../../../core/data-services/reports-data.service';


@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	providers: [OrdersDataService,
	CustomerDataService,
	ReportDataService]
})
export class DashboardComponent implements OnInit {

	ordersRevenue = 0;
	order1: Order;
	order2: Order;
	order3: Order;

	customer1: Customer;
	customer2: Customer;
	customer3: Customer;

	customerCount = 0;

	notification = 0;

	constructor(
		private ordersDataService: OrdersDataService,
		private customerDataService: CustomerDataService,
		private reportDataService: ReportDataService
	) { }

	ngOnInit() {

		this.ordersDataService.getOrders().subscribe(orders => {
			const order: Order[] = orders;
			for (let i = 0; i < order.length ; i++) {
				this.ordersRevenue = this.ordersRevenue + order[i].finalPrice;
				this.order1 = order[0];
				this.order2 = order[1];
				this.order3 = order[2];
				this.notification = this.notification + order.length;
			}
		});

		this.customerDataService.getCustomers().subscribe(customers => {
			const customer: Customer[] = customers;
			for (let i = 0; i < customer.length ; i++) {
				this.customer1 = customer[0];
				this.customer2 = customer[1];
				this.customer3 = customer[2];
			}
			this.customerCount = customer.length;
		});

		this.reportDataService.getReports().subscribe(reports => {
			const report: Report[] = reports;
			this.notification = this.notification + report.length;
		});
	}

}