import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductRespone } from '../../modules/product.model';
import { ProductService } from '../../services/productService.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit{
  displayedColumns: string[] = ['id', 'productName', 'category', 'condition', 'price', 'comment', 'date'];
  dataSource!: MatTableDataSource<ProductRespone>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  products!: ProductRespone[];

  constructor(private productService: ProductService) {

  }
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((response) => {
      this.products = response;
      this.dataSource = new MatTableDataSource(this.products);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

