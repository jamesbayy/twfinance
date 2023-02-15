import { get,post } from "./config";




    export function  getStockFile(){
        return get('/api/stock',{}).then((res)=>{
            return res
        })
    }
    export function getStockAll(){
        return get('/api/stock/all',{}).then((res)=>{
            return res
        })
    }
