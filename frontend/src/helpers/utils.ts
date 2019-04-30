
// export var API_LINK = "http://10.64.212.20:8080/"
export var API_LINK = "http://localhost:8080/"
export var CLIENT_ID  = "00000001"
export interface Product {
  name:string;
  clientId:string
}
export function sayHello() {
  return Math.random() < 0.5 ? 'Hello' : 'Hola';
}
export enum ProviderType {
  REDIS = "Redis",
  CASSANDRA = "cassandra",
  NEO4J = "neo4j"
}
