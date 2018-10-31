import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  // https://programandoointentandolo.com/2017/07/estructuras-condicionales-java.html
  // Operador terniario
  public getLaunches$ = (): Observable<any> => {
    return this.httpClient.get('../../assets/launchlibrary.json')
      .pipe(
        map((res: any) => res.launches.map(launch => ({
          id: launch.id,
          name: launch.name,
          status: launch.status,
          date: new Date(launch.net),
          failreason: launch.failreason,
          location: launch.location.name,
          locationMap: launch.pads ? launch.pads.length > 0 ? launch.pads[0].mapURL : '' : '',
          rocket: {
            id: launch.rocket ? launch.rocket.id : 0,
            name: launch.rocket ? launch.rocket.name : '',
            image: launch.rocket ? launch.rocket.imageURL : '',
            mission: launch.missions ? launch.missions.length > 0 ? launch.missions[0].description : '' : '',
            missionUrl: launch.missions ? launch.missions.length > 0 ? launch.missions[0].wikiURL : '' : '',
          },
          agencie: {
            id: launch.lsp ? launch.lsp.id : 0,
            name: launch.lsp ? launch.lsp.name : '',
            country: launch.lsp ? launch.lsp.countryCode : '',
            url: launch.lsp ? launch.lsp.wikiURL : '',
          }
        }))
        )
      );
  }

  public getTypesStatus$ = (): Observable<any> => {
    return this.httpClient.get('../../assets/launchstatus.json')
      .pipe(map((res: any) => res.types.map(typeStatus => ({
        id: typeStatus.id,
        name: typeStatus.name,
        description: typeStatus.description,
        color: typeStatus.color
      }))
    ));
  }

}