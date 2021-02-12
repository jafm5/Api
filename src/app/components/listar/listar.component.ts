import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import {UserService } from '../../service/user.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {
  public user: User
  public usuariosEncontrados: any = []
  public buscarRol: string

  constructor(private userService: UserService) { 
    this.user = new User('','','','', 0,'')
  }

  ngOnInit(): void {
  }
  listar(){
    this.userService.mostrarUsuarios(this.buscarRol).subscribe(
      (res:any) => {
        if(res.statusCode !== 200){
          alert ('No se encontraron usuarios');
        }else{
          this.usuariosEncontrados = res.allUsers;
        } 
      },
      (error) =>{
        var errormensaje = <any>error;
        if (errormensaje != null){
          console.log(error)
        }
      }
    );
  }

}
