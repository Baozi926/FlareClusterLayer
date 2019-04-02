
/**
Typings for esri loaded modules that aren't exposed in the offical typings file for ESRI or Dojo
*/

declare namespace __esriExtend {
   
    export const dojoxGfx: any;

    export const GFXObject: any;
    export const Projector: any;
    export const RenderingCore2D: any;
    export const TextureManager: any;
    export const CIMSymbolHelper: any;
}


declare module "esri/views/2d/engine/graphics/GFXObject" {
    import GFXObject = __esriExtend.GFXObject;
    export = GFXObject;
}

declare module "esri/views/2d/engine/graphics/Projector" {
    import Projector = __esriExtend.Projector;
    export = Projector;
}


declare module "esri/views/2d/RenderingCore2D" {
    import RenderingCore2D = __esriExtend.RenderingCore2D;
    export = RenderingCore2D;
}


declare module "esri/views/2d/engine/webgl/TextureManager" {
    import TextureManager = __esriExtend.TextureManager;
    export = TextureManager;
}

declare module "esri/views/2d/engine/webgl/CIMSymbolHelper" {
    import CIMSymbolHelper = __esriExtend.CIMSymbolHelper;
    export = CIMSymbolHelper;
}

//declare module "dojox/gfx" {
//    import dojoxGfx = __esriExtend.dojoxGfx;
//    export = dojoxGfx; 
//}
