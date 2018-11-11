import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Client } from '../entities/client';
import { GameStoreApiService } from '../services/game-store-api.service';
@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
    client: Client = {
        name: "",
        id: 0,
        email: "",
        avatar:"../../assets/images/placeholder.png"
    }
    private imageSrc: string = "../../assets/images/placeholder.png";
    constructor(private gameStoreService: GameStoreApiService) {
        if (this.gameStoreService.client) {
            this.client = this.gameStoreService.client;
        }


    }

    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    uploadAvatar(e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }
    _handleReaderLoaded(e) {
        let reader = e.target;
        this.imageSrc = reader.result;
        this.client.avatar = this.imageSrc;
        
        
        console.log(this.client);
        this.gameStoreService.updateClient(this.client).subscribe(value=>{
            console.log(value);
            
        })
    }
}

