import React from 'react'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";


const SubNavbarOne = () => {
  return (
		<div>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Cryptocurrencies</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbItem></BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>Bitcoin</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
		</div>
	);
}

export default SubNavbarOne