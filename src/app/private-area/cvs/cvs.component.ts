import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { cvs } from 'src/app/_models/cvs';
import { AccountService } from 'src/app/_services/account.service';
import { CvsService } from 'src/app/_services/cvs.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-cvs',
  templateUrl: './cvs.component.html',
  styleUrls: ['./cvs.component.css']
})

export class CvsComponent implements OnInit {
  baseUrl = environment.baseUrl;;

  constructor(public accountService: AccountService, private router: Router, private http: HttpClient,
    private cvsService: CvsService, private toastr: ToastrService, public dialog: MatDialog) { }

  str: cvs[] | undefined;

  ngOnInit(): void {
    this.loadCvs();
  }

  setAsdefault(def: boolean): string {
    return def ? 'ברירת מחדל' : 'הגדר כברירת מחדל';
  }

  loadCvs() {
    this.accountService.loadCvs().subscribe({
      next: (x) => this.str = x
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", file.name);
      this.http.post(`${this.baseUrl}user/cv/add`, formData, { observe: 'response' }).subscribe({
        next: (x) => { console.log(x); this.reloadCurrentPage(); }
      });
    }
  }

  setAsDefault(cvNumber: number) {
    this.cvsService.setAsDefault(cvNumber).subscribe({
      next: () => {
        this.str!.forEach(x => { x.isDefault = false; });

        this.str![cvNumber].isDefault = true;
      }
    });
  }

  changeName(cvNumber: number, oldName: string) {
    let sign = prompt("הזן שם חדש לקורות החיים:", oldName);
    console.log(sign);
    if ((sign != null) && sign.toLowerCase() !== oldName.toLocaleLowerCase()) {
      this.cvsService.changeName(cvNumber, sign ?? '').subscribe({
        next: (x) => { this.toastr.success(x); this.reloadCurrentPage(); }
      });
    }
  }

  downloadFile(cvNumber: number) {
    this.cvsService.downloadFile(cvNumber).pipe(take(1))
      .subscribe((response) => {

        this.getFile(response)
      })
  }

  downloadAllCvs() {
    this.cvsService.downloadAllCvs().pipe(take(1))
      .subscribe((response) => {
        this.getFile(response)
      })
  }

  downloadAsExcel() {
    this.cvsService.downloadAsExcel().pipe(take(1))
      .subscribe((response) => {
        this.getFile(response)
      })
  }

  getFile(response: HttpResponse<Blob>) {
    const contentDisposition = response.headers.get('Content-Disposition') ?? '';
    const utf8FilenameRegex = /filename\*=UTF-8''([\w%\-\.]+)(?:; ?|$)/i;
    const asciiFilenameRegex = /^filename=(["']?)(.*?[^\\])\1(?:; ?|$)/i;

    let fileName = '';
    if (utf8FilenameRegex.test(contentDisposition)) {
      fileName = decodeURIComponent((utf8FilenameRegex.exec(contentDisposition) ?? ['0', '0'])[1]);
    } else {
      const filenameStart = contentDisposition.toLowerCase().indexOf('filename=');
      if (filenameStart >= 0) {
        const partialDisposition = contentDisposition.slice(filenameStart);
        const matches = asciiFilenameRegex.exec(partialDisposition);
        if (matches != null && matches[2]) {
          fileName = matches[2];
        }
      }
    }

    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(new Blob([response.body!], { type: response.body!.type }));
    downloadLink.download = fileName!;
    downloadLink.click();
  }

  deleteCv(cvNumber: number) {
    this.cvsService.delete(cvNumber).subscribe({
      next: (x) => { console.log(x); this.reloadCurrentPage(); }
    });
  }

  reloadCurrentPage() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}