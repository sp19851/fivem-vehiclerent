import {Blip} from './blip'
import {Marker} from './marker'

type Rent = IRootObject

interface IRootObject {
    Office: IOffice;
    Marker: Marker;
}

interface IOffice {
    Ped: string;
    PedScenario: string;
    TargetLabel: string;
    TargetIcon: string;
    Places: IPlaces[];
    Blip: Blip,
}
export interface IPlaces {
    PedPosition:IPosition,
    VehicleSpawnPosition:IPosition,
    VehicleList:IVehicleList
}

interface IPosition {
    x: number;
    y: number;
    z: number;
    w: number;
}

interface IVehicleList {
    Model: string;
    Price: number;
}

export {Rent}